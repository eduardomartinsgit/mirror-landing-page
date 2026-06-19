# Registros DNS (usemirror.com.br) - CAA, SPF, DKIM, DMARC

O dominio usa os nameservers do HostGator (`nspro124/nspro125.hostgator.com.br`),
entao os registros sao editados no painel do HostGator.

## Onde colar (cPanel -> Editor de Zona)
1. Painel HostGator -> botao **cPanel**.
2. Procure **Editor de Zona** (ou "Zone Editor", em Dominios).
3. Clique em **Gerenciar** no dominio `usemirror.com.br` -> **Adicionar Registro**.
4. Para cada registro: escolha o **Tipo** (TXT, CAA, etc.), preencha **Nome**, **TTL**
   (use 3600) e **Valor/Conteudo**.

Observacoes do HostGator:
- No campo **Nome**, o HostGator geralmente ja completa com `.usemirror.com.br`.
  Para o dominio raiz use `@` (ou deixe so o dominio). Para o DMARC use `_dmarc`.
- Em TXT, cole o valor SEM aspas externas (o painel adiciona). Se o painel exigir
  aspas, mantenha as que estao no exemplo.
- Propagacao: de minutos a algumas horas.

---

## 1. CAA (limita quais autoridades emitem certificado)
Faca DEPOIS que o SSL estiver ativo. ATENCAO: se restringir para a CA errada, a
RENOVACAO do certificado falha. Confira a CA real: abra `https://usemirror.com.br`,
veja o emissor do certificado (ou pergunte ao suporte do HostGator) e deixe no CAA
apenas a(s) CA(s) usada(s). O conjunto abaixo cobre as mais comuns no HostGator;
remova as que nao se aplicam.

```
Tipo: CAA   Nome: @   TTL: 3600   Flags: 0   Tag: issue     Valor: sectigo.com
Tipo: CAA   Nome: @   TTL: 3600   Flags: 0   Tag: issue     Valor: comodoca.com
Tipo: CAA   Nome: @   TTL: 3600   Flags: 0   Tag: issue     Valor: letsencrypt.org
Tipo: CAA   Nome: @   TTL: 3600   Flags: 0   Tag: iodef      Valor: mailto:security@usemirror.com.br
```

Se o painel pedir o registro em uma linha so (BIND), e:
```
usemirror.com.br.  3600  IN  CAA  0 issue "sectigo.com"
usemirror.com.br.  3600  IN  CAA  0 issue "letsencrypt.org"
usemirror.com.br.  3600  IN  CAA  0 iodef "mailto:security@usemirror.com.br"
```

---

## 2. SPF (autoriza quem envia e-mail pelo dominio) - registro TXT
Depende de QUEM envia. Casos:

A) Voce usa as caixas de e-mail do HostGator (do plano): autorize o servidor.
```
Tipo: TXT   Nome: @   TTL: 3600
Valor: v=spf1 a mx ip4:50.6.138.61 include:hostgator.com.br ~all
```
B) Voce NAO envia e-mail pelo dominio raiz (so usa o Resend num subdominio):
   maximize o anti-spoofing dizendo que o raiz nao manda e-mail.
```
Tipo: TXT   Nome: @   TTL: 3600
Valor: v=spf1 -all
```

Regra: so pode existir UM registro SPF (TXT comecando com v=spf1) no dominio.
Se ja houver um criado pelo HostGator, edite-o em vez de criar outro.

> Resend (e-mails da lista de espera): NAO invente os registros. Ao verificar o
> dominio no painel do Resend, ele te da os registros exatos (normalmente um
> subdominio `send.usemirror.com.br` com SPF, DKIM e MX proprios). Cole-os como
> vierem; por usarem subdominio, nao conflitam com o SPF do raiz acima.

---

## 3. DKIM (assinatura criptografica do e-mail) - registro TXT
NAO da para pre-montar: o valor e uma CHAVE PUBLICA gerada pelo provedor.
- HostGator: gera o DKIM ao ativar e-mail (cPanel -> Email Deliverability / Autenticacao de E-mail -> botao para gerar/instalar). Muitas vezes ele instala sozinho.
- Resend: no painel do Resend, ao adicionar o dominio, ele mostra um registro tipo
  `resend._domainkey` (ou similar) com `Nome` e `Valor` (p=MIIB...). Cole exatamente.

Formato (exemplo ilustrativo, NAO use este valor):
```
Tipo: TXT   Nome: resend._domainkey   TTL: 3600
Valor: v=DKIM1; k=rsa; p=<CHAVE_PUBLICA_QUE_O_PROVEDOR_TE_DER>
```

---

## 4. DMARC (politica anti-falsificacao) - registro TXT
Pronto para colar. Comece em `p=none` (so monitora, nao bloqueia nada) por 2 a 4
semanas; com os relatorios limpos, suba para `quarantine` e depois `reject`.

Passo 1 (monitorar):
```
Tipo: TXT   Nome: _dmarc   TTL: 3600
Valor: v=DMARC1; p=none; rua=mailto:dmarc@usemirror.com.br; fo=1; pct=100
```
Passo 2 (apos relatorios limpos):
```
Valor: v=DMARC1; p=quarantine; rua=mailto:dmarc@usemirror.com.br; fo=1; pct=100
```
Passo 3 (alvo final):
```
Valor: v=DMARC1; p=reject; rua=mailto:dmarc@usemirror.com.br; adkim=s; aspf=s; fo=1; pct=100
```

> Crie a caixa `dmarc@usemirror.com.br` (ou use um servico gratuito de relatorios
> DMARC) para receber os `rua`. Sem isso voce nao ve os relatorios.

---

## Ordem sugerida
1. Ative o SSL (cPanel).
2. SPF (escolha A ou B) + DKIM (do provedor) -> valide o envio de e-mail.
3. DMARC em `p=none`; acompanhe os relatorios; suba para reject.
4. CAA depois que o SSL renovou pelo menos uma vez sem erro.

## Verificacao
- SPF/DKIM/DMARC: mxtoolbox.com (supertool), dmarcian.com, ou Gmail (ver "mostrar original" de um e-mail enviado).
- CAA: `dig CAA usemirror.com.br` ou sslmate.com/caa.
