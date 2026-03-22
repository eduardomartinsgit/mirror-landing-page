"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface PrivacyPolicyModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PrivacyPolicyModal({ open, onOpenChange }: PrivacyPolicyModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[85vh] bg-card border-border/50">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl gradient-text">
            Política de Privacidade
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Em conformidade com o RGPD (UE) 2016/679 e a Lei n.º 58/2019 de Portugal
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">

            {/* 1. Responsável */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                1. Responsável pelo Tratamento de Dados
              </h3>
              <p>
                A entidade responsável pelo tratamento dos teus dados pessoais é a Mirror
                (&ldquo;nós&rdquo;, &ldquo;nosso&rdquo;), com sede em Portugal.
              </p>
              <p className="mt-2">
                Para qualquer questão relacionada com a proteção de dados, podes
                contactar-nos através do e-mail:{" "}
                <span className="text-[#00D4FF]">privacidade@mirror.app</span>
              </p>
            </section>

            {/* 2. Dados recolhidos */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                2. Dados Pessoais Recolhidos
              </h3>
              <p>Ao inscreveres-te na lista de espera, recolhemos os seguintes dados:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                <li><span className="text-foreground">Nome completo</span> — para personalizar a comunicação</li>
                <li><span className="text-foreground">Endereço de e-mail</span> — para contacto e envio de informações sobre o lançamento</li>
                <li><span className="text-foreground">Número de telemóvel</span> (opcional) — para contacto adicional, caso autorizado</li>
                <li><span className="text-foreground">Data e hora de inscrição</span> — para registo e auditoria</li>
                <li><span className="text-foreground">Consentimento explícito</span> — registo de que aceitaste esta política</li>
              </ul>
            </section>

            {/* 3. Finalidade */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                3. Finalidade do Tratamento
              </h3>
              <p>Os teus dados são tratados exclusivamente para as seguintes finalidades:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                <li>Gestão da lista de espera e comunicação sobre o lançamento do Mirror</li>
                <li>Envio de informações relevantes sobre o produto, funcionalidades e acesso antecipado</li>
                <li>Contacto para oferta de condições especiais de pré-lançamento</li>
              </ul>
              <p className="mt-2">
                Os teus dados <span className="text-foreground font-medium">nunca serão utilizados</span> para
                fins diferentes dos acima indicados sem o teu consentimento prévio e explícito.
              </p>
            </section>

            {/* 4. Base jurídica */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                4. Base Jurídica do Tratamento
              </h3>
              <p>
                O tratamento dos teus dados pessoais baseia-se no teu{" "}
                <span className="text-foreground font-medium">consentimento explícito</span>{" "}
                (Artigo 6.º, n.º 1, alínea a) do RGPD), prestado ao assinalar a caixa
                de consentimento e submeter o formulário de inscrição.
              </p>
              <p className="mt-2">
                Tens o direito de retirar o teu consentimento a qualquer momento, sem que
                isso comprometa a licitude do tratamento efetuado com base no consentimento
                previamente dado.
              </p>
            </section>

            {/* 5. Período de conservação */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                5. Período de Conservação dos Dados
              </h3>
              <p>
                Os teus dados serão conservados enquanto a lista de espera estiver ativa e
                durante um período máximo de <span className="text-foreground font-medium">24 meses</span> após
                a tua inscrição, salvo se:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                <li>Te tornares utilizador do Mirror (caso em que se aplicará a política de privacidade da aplicação)</li>
                <li>Solicitares a eliminação antecipada dos teus dados</li>
                <li>Retirares o teu consentimento</li>
              </ul>
              <p className="mt-2">
                Findo o período de conservação, os dados serão eliminados de forma segura e
                irreversível de todos os nossos sistemas e sub-processadores.
              </p>
            </section>

            {/* 6. Destinatários e sub-processadores */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                6. Destinatários e Sub-processadores
              </h3>
              <p>
                Os teus dados podem ser partilhados com os seguintes sub-processadores,
                estritamente para as finalidades indicadas:
              </p>
              <div className="mt-3 rounded-xl border border-border/50 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50 bg-muted/30">
                      <th className="text-left p-3 text-foreground font-medium">Entidade</th>
                      <th className="text-left p-3 text-foreground font-medium">Finalidade</th>
                      <th className="text-left p-3 text-foreground font-medium">Localização</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/30">
                      <td className="p-3">Supabase Inc.</td>
                      <td className="p-3">Armazenamento de dados</td>
                      <td className="p-3">UE (Frankfurt)</td>
                    </tr>
                    <tr>
                      <td className="p-3">GitHub Pages</td>
                      <td className="p-3">Alojamento do website</td>
                      <td className="p-3">EUA (SCCs)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                Todos os sub-processadores estão vinculados por Acordos de Processamento de
                Dados (DPA) e cumprem o RGPD. As transferências para fora do EEE são
                protegidas por Cláusulas Contratuais-Tipo (SCCs) aprovadas pela Comissão Europeia.
              </p>
              <p className="mt-2">
                Os teus dados <span className="text-foreground font-medium">nunca serão vendidos</span> a
                terceiros nem utilizados para fins publicitários de entidades externas.
              </p>
            </section>

            {/* 7. Segurança */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                7. Medidas de Segurança
              </h3>
              <p>Implementamos medidas técnicas e organizativas adequadas para proteger os teus dados:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                <li>Encriptação AES-256 em repouso</li>
                <li>Encriptação TLS 1.3 em trânsito</li>
                <li>Controlo de acesso baseado em funções (Row Level Security)</li>
                <li>Auditorias regulares de segurança</li>
              </ul>
            </section>

            {/* 8. Direitos do titular */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                8. Os Teus Direitos
              </h3>
              <p>
                Nos termos do RGPD e da Lei n.º 58/2019, tens os seguintes direitos sobre os
                teus dados pessoais:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2 ml-2">
                <li>
                  <span className="text-foreground font-medium">Direito de acesso</span> (Art. 15.º) —
                  obter confirmação e cópia dos teus dados
                </li>
                <li>
                  <span className="text-foreground font-medium">Direito de retificação</span> (Art. 16.º) —
                  corrigir dados inexatos ou incompletos
                </li>
                <li>
                  <span className="text-foreground font-medium">Direito ao apagamento</span> (Art. 17.º) —
                  solicitar a eliminação dos teus dados (&ldquo;direito a ser esquecido&rdquo;)
                </li>
                <li>
                  <span className="text-foreground font-medium">Direito à limitação</span> (Art. 18.º) —
                  restringir o tratamento em determinadas circunstâncias
                </li>
                <li>
                  <span className="text-foreground font-medium">Direito à portabilidade</span> (Art. 20.º) —
                  receber os teus dados num formato estruturado e legível por máquina
                </li>
                <li>
                  <span className="text-foreground font-medium">Direito de oposição</span> (Art. 21.º) —
                  opor-te ao tratamento dos teus dados
                </li>
                <li>
                  <span className="text-foreground font-medium">Direito de retirar o consentimento</span> —
                  a qualquer momento, sem custos
                </li>
              </ul>
              <p className="mt-3">
                Para exercer qualquer destes direitos, envia um e-mail para{" "}
                <span className="text-[#00D4FF]">privacidade@mirror.app</span>.
                Responderemos no prazo máximo de 30 dias.
              </p>
            </section>

            {/* 9. Reclamação */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                9. Direito de Reclamação
              </h3>
              <p>
                Se considerares que o tratamento dos teus dados pessoais viola o RGPD ou a
                legislação nacional aplicável, tens o direito de apresentar uma reclamação
                junto da autoridade de controlo competente:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-muted/30 border border-border/30">
                <p className="text-foreground font-medium">
                  Comissão Nacional de Proteção de Dados (CNPD)
                </p>
                <p className="mt-1">Av. D. Carlos I, 134 - 1.º</p>
                <p>1200-651 Lisboa, Portugal</p>
                <p className="mt-1">
                  Website:{" "}
                  <span className="text-[#00D4FF]">www.cnpd.pt</span>
                </p>
                <p>
                  E-mail:{" "}
                  <span className="text-[#00D4FF]">geral@cnpd.pt</span>
                </p>
              </div>
            </section>

            {/* 10. Cookies */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                10. Cookies e Tecnologias de Rastreamento
              </h3>
              <p>
                Este website não utiliza cookies de rastreamento, cookies publicitários ou
                ferramentas de analytics de terceiros. Apenas são utilizados cookies
                estritamente necessários para o funcionamento técnico do site, os quais
                estão isentos de consentimento nos termos da Diretiva ePrivacy e da
                Lei n.º 41/2004.
              </p>
            </section>

            {/* 11. Menores */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                11. Dados de Menores
              </h3>
              <p>
                Este formulário destina-se exclusivamente a maiores de 16 anos, em
                conformidade com o Artigo 8.º do RGPD e o Artigo 16.º da Lei n.º 58/2019.
                Não recolhemos intencionalmente dados de menores de 16 anos. Se tomares
                conhecimento de que um menor se inscreveu, contacta-nos para procedermos
                à eliminação imediata dos dados.
              </p>
            </section>

            {/* 12. Alterações */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                12. Alterações a esta Política
              </h3>
              <p>
                Reservamo-nos o direito de atualizar esta política de privacidade a qualquer
                momento. Quaisquer alterações significativas serão comunicadas por e-mail
                aos inscritos na lista de espera. A data da última atualização será sempre
                indicada abaixo.
              </p>
            </section>

            {/* Data de atualização */}
            <div className="pt-4 border-t border-border/30">
              <p className="text-xs text-muted-foreground/70">
                Última atualização: março de 2026
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                Esta política foi redigida em conformidade com o Regulamento (UE) 2016/679
                (RGPD), a Lei n.º 58/2019 (execução do RGPD em Portugal), a Lei n.º 41/2004
                (proteção de dados nas comunicações eletrónicas) e as orientações da CNPD.
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
