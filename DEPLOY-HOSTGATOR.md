# Deploy do landing no HostGator (cPanel)

O landing e um site estatico (Next.js `output: 'export'`). Hospedar no HostGator
e: gerar a pasta `out/` e enviar o conteudo dela para o `public_html`. Sem Node,
sem servidor: o Apache do cPanel serve os arquivos.

Dominio: `usemirror.com.br` (Plano Turbo). FTP: `50.6.138.61`.

> O `basePath` ja e condicional (`next.config.mjs`): build normal = raiz (este
> deploy); GitHub Pages usa `DEPLOY_TARGET=ghpages`. O `.htaccess` ja esta em
> `public/` e entra no build (HTTPS, cache, 404).

## 1. Variaveis de ambiente (formulario da lista de espera)
As `NEXT_PUBLIC_*` sao embutidas no build. Em `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://<projeto-br>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon / publishable key>
```

Use o projeto Supabase de Sao Paulo e confirme que a tabela `leads` existe.

## 2. Build (raiz)
```bash
cd mirror-landing-page
pnpm install
pnpm build                      # gera out/
cd out && zip -r ../site.zip .  # zipa o CONTEUDO de out/ (nao a pasta)
```

## 3. Upload para o public_html
Painel HostGator -> cPanel -> Gerenciador de Arquivos -> `public_html`:
1. Apague o `index.html`/placeholder padrao que vier.
2. Envie `site.zip` para dentro de `public_html` e use Extrair.
3. Confirme que `index.html`, a pasta `_next/` e o `.htaccess` ficaram direto no
   `public_html` (nao dentro de uma subpasta `out/`). Ative "mostrar arquivos
   ocultos" no gerenciador para ver o `.htaccess`.

Alternativa por FTP: host `50.6.138.61`, usuario/senha do cPanel, enviar o
conteudo de `out/` para `public_html`.

## 4. SSL (HTTPS)
Painel -> Certificado SSL (ou cPanel -> SSL/TLS Status -> AutoSSL) para
`usemirror.com.br`. SO depois que o certificado estiver ativo o `.htaccess`
forca HTTPS sem quebrar. Se der loop, foi porque o SSL ainda nao propagou.

## 5. Dominio / DNS
`usemirror.com.br` ja e o dominio do plano (DNS `nspro124`/`nspro125.hostgator.com.br`),
entao resolve direto. Se o dominio estivesse registrado em outro lugar, apontar
os nameservers para `nspro124.hostgator.com.br` e `nspro125.hostgator.com.br`
(propaga em ate 24-48h).

## 6. Teste
Abra `https://usemirror.com.br`. O landing carrega em pt-BR (o geo-gate libera
Brasil). Envie um e-mail de teste no formulario e confirme que cai na tabela
`leads` do Supabase.

## Atualizar o site depois
Repita os passos 2 e 3 (rebuild + re-upload do `out/`). Para automatizar no
futuro: cPanel Git Version Control ou deploy via FTP em CI.

## Observacoes
- Nao use o "Criar site" / construtor do HostGator (e para WordPress/builder).
  Aqui subimos os arquivos estaticos prontos.
- O GitHub Pages continua funcionando em paralelo (workflow usa
  `DEPLOY_TARGET=ghpages`). Se nao for mais usar, desative o workflow `deploy.yml`.
