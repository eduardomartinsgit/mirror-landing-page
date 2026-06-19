# Endurecimento de seguranca (landing usemirror.com.br)

Estado da seguranca do landing estatico, em camadas, com base nas praticas
mais atuais (2026). Principio: aplicar o que protege sem quebrar o site
(disponibilidade tambem e seguranca). Itens fortes porem de risco/compromisso
ficam como opt-in documentado.

## 1. Cabecalhos HTTP (FEITO em public/.htaccess)
Todos enviados pelo Apache/cPanel; entram no build via public/.htaccess.

- HSTS (Strict-Transport-Security): so HTTPS, 2 anos, includeSubDomains. So vale apos o SSL ativo.
- CSP (Content-Security-Policy): default-src 'self'; sem object/base externos; frame-ancestors 'none'; connect-src libera apenas ipapi.co (geo-gate) e *.supabase.co (formulario); upgrade-insecure-requests. script/style com 'unsafe-inline' (export estatico do Next nao tem nonce).
- X-Frame-Options: DENY (anti-clickjacking; redundante com frame-ancestors, mantido para navegadores antigos).
- X-Content-Type-Options: nosniff.
- Referrer-Policy: strict-origin-when-cross-origin.
- Permissions-Policy: desliga camera, microfone, geolocalizacao, pagamento, usb, sensores, browsing-topics, etc. (o landing nao usa nenhum).
- Cross-Origin-Opener-Policy: same-origin (mitiga Spectre).
- Cross-Origin-Resource-Policy: same-origin (bloqueia hotlink dos recursos).
- X-Permitted-Cross-Domain-Policies: none; X-DNS-Prefetch-Control: off.
- Remove X-Powered-By / Server (reduz fingerprint).
- Options -Indexes (sem listagem de diretorio) e bloqueio de .env / source maps / dotfiles de VCS.

Verifique a nota A/A+ em securityheaders.com e no Mozilla Observatory depois do deploy.

## 2. Opt-in (fortes, porem com risco/compromisso - ative com cuidado)
- HSTS preload: adicionar "; preload" ao HSTS e submeter em hstspreload.org. Compromisso forte e dificil de reverter: TODOS os subdominios passam a exigir HTTPS para sempre. So depois de confirmar que todos (inclusive futuros, ex. app.usemirror.com.br) estao em HTTPS.
- COEP (Cross-Origin-Embedder-Policy: require-corp): isolamento total (crossOriginIsolated). Pode quebrar recursos de terceiros; o landing nao precisa. Linha ja existe comentada no .htaccess.
- Trusted Types (require-trusted-types-for 'script'): defesa avancada contra XSS no cliente (Google). Exige o codigo usar policies de Trusted Types; o Next em export estatico nao faz isso por padrao e quebraria. Adotar so com mudanca de codigo, primeiro em Content-Security-Policy-Report-Only.

## 3. TLS / camada do host (HostGator gerencia)
Em hospedagem compartilhada voce nao controla cipher suites por .htaccess; e do host.
- Ative o SSL no cPanel e confirme nota A+ em SSL Labs (ssllabs.com/ssltest).
- Garanta TLS 1.3 e TLS 1.2; peca ao suporte para desativar TLS 1.0/1.1 se ainda estiverem ligados.
- OCSP stapling: normalmente ja ativo no HostGator.

## 4. Camada de DNS (no painel de DNS do dominio)
- CAA: restrinja quais autoridades podem emitir certificado para usemirror.com.br (ex.: a CA usada pelo HostGator, normalmente Sectigo/Let's Encrypt). Evita emissao indevida.
- DNSSEC: ative se o HostGator/registrador suportar (assina as respostas DNS, evita spoofing/cache poisoning).
- E-mail (anti-spoofing do dominio): publique SPF, DKIM e DMARC. Importante porque voce vai enviar e-mails da lista de espera (Resend) a partir do dominio; sem DMARC, golpistas podem falsificar o seu dominio.

## 5. Aplicacao / Supabase (camada separada, ja no mirror-app)
- RLS no Postgres, AES-256-GCM por usuario, dados sensiveis (LGPD art. 11) - ver SECURITY do mirror-app.
- Formulario da lista: considere Cloudflare Turnstile (anti-bot) no lead-form; isso exige liberar o dominio do Turnstile no CSP (script-src/connect-src/frame-src).
- Rate limiting de insercao de leads no lado do Supabase (policy/edge) para conter abuso.

## 6. security.txt (FEITO)
public/.well-known/security.txt (RFC 9116) com contato de seguranca e validade. Ajuste o e-mail de contato para um que voce monitore.

## 7. Ferramentas de verificacao
- securityheaders.com e Mozilla Observatory (cabecalhos)
- SSL Labs (TLS)
- CSP Evaluator do Google (qualidade da CSP)
- hstspreload.org (status do preload)

## Referencias (2026)
- OWASP Secure Headers Project: https://owasp.org/www-project-secure-headers/
- OWASP HTTP Headers Cheat Sheet: https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/HTTP_Headers_Cheat_Sheet.md
- MDN Content Security Policy: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP
- Security Headers em 2026 (defaults que nao quebram): https://wplus.net/security/security-headers-2026-csp-sri-practical-defaults/
- Security Headers Cheat Sheet 2026 (HSTS e CSP): https://offseckit.com/blog/security-headers-guide
- RFC 9116 (security.txt): https://www.rfc-editor.org/rfc/rfc9116
