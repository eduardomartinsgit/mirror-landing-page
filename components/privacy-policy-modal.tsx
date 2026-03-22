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

            {/* 7. Publicidade e Conteúdos Patrocinados */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                7. Publicidade e Conteúdos Patrocinados
              </h3>
              <p>
                A Plataforma poderá apresentar, nas modalidades de utilização gratuita,
                conteúdos publicitários de terceiros sob a forma de anúncios de vídeo
                recompensados (rewarded ads), cuja visualização é facultativa e iniciada
                exclusivamente por acção voluntária do Utilizador. A exibição de tais
                conteúdos publicitários constitui condição inerente à disponibilização
                gratuita do Serviço, nos termos do Artigo 6.º, n.º 1, alínea b) do RGPD
                (execução de contrato).
              </p>
              <p className="mt-2">
                Os dados pessoais do Utilizador, incluindo mas não se limitando a gravações
                de voz, transcrições, análises emocionais e demais dados de categoria especial
                nos termos do Artigo 9.º do RGPD, não são em circunstância alguma partilhados
                com anunciantes, redes publicitárias ou quaisquer terceiros para efeitos de
                segmentação publicitária, profiling ou personalização de anúncios.
              </p>
              <p className="mt-2">
                Os planos de subscrição pagos poderão incluir a supressão total de conteúdos
                publicitários, conforme especificado nas condições de cada plano.
              </p>
            </section>

            {/* 8. Segurança */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                8. Medidas de Segurança
              </h3>
              <p>Implementamos medidas técnicas e organizativas adequadas para proteger os teus dados:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                <li>Encriptação AES-256 em repouso</li>
                <li>Encriptação TLS 1.3 em trânsito</li>
                <li>Controlo de acesso baseado em funções (Row Level Security)</li>
                <li>Auditorias regulares de segurança</li>
              </ul>
            </section>

            {/* 9. Limitação de Responsabilidade */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                9. Limitação de Responsabilidade e Exclusão de Garantias
              </h3>
              <p>
                O Serviço é disponibilizado &ldquo;tal como está&rdquo; (as is) e &ldquo;conforme
                disponível&rdquo; (as available), sem quaisquer garantias, expressas ou implícitas,
                incluindo, sem limitação, garantias de adequação a um fim específico,
                comercialização, exactidão, completude ou não violação de direitos de
                terceiros, na máxima extensão permitida pela legislação aplicável.
              </p>
              <p className="mt-2">
                A Mirror não constitui, em caso algum, um serviço de saúde, dispositivo médico
                na acepção do Regulamento (UE) 2017/745 (MDR), nem substitui o acompanhamento
                por profissionais de saúde mental devidamente habilitados. Os conteúdos gerados
                pela inteligência artificial têm carácter meramente informativo e reflexivo, não
                configurando aconselhamento clínico, diagnóstico, prescrição terapêutica ou
                qualquer forma de intervenção médica ou paramédica.
              </p>
              <p className="mt-2">
                Em nenhuma circunstância a Mirror, os seus administradores, colaboradores,
                parceiros ou sub-processadores serão responsáveis por quaisquer danos directos,
                indirectos, incidentais, consequenciais, especiais, exemplares ou punitivos,
                incluindo, sem limitação, danos por perda de lucros, dados, goodwill, uso ou
                outras perdas intangíveis, resultantes de ou relacionados com: (i) a utilização
                ou impossibilidade de utilização do Serviço; (ii) qualquer conduta ou conteúdo
                de terceiros no Serviço; (iii) qualquer conteúdo obtido através do Serviço;
                (iv) acesso não autorizado, utilização ou alteração dos dados do Utilizador,
                mesmo que a Mirror tenha sido previamente informada da possibilidade de tais
                danos.
              </p>
              <p className="mt-2">
                A responsabilidade total e cumulativa da Mirror perante o Utilizador, por
                qualquer e todos os pedidos de indemnização emergentes de ou relacionados com
                o presente acordo ou com a utilização do Serviço, não excederá, em caso algum,
                o montante total efectivamente pago pelo Utilizador à Mirror nos doze (12)
                meses imediatamente anteriores ao evento que originou o pedido, ou, caso o
                Utilizador se encontre no plano gratuito, o valor de dez euros (€10,00).
              </p>
              <p className="mt-2">
                O Utilizador reconhece e aceita que utiliza o Serviço por sua conta e risco
                exclusivos, e que a Mirror não poderá ser responsabilizada por decisões tomadas
                pelo Utilizador com base nos conteúdos, insights ou reflexões gerados pelo
                Serviço.
              </p>
            </section>

            {/* 10. Indemnização */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                10. Indemnização
              </h3>
              <p>
                O Utilizador compromete-se a defender, indemnizar e isentar de responsabilidade
                a Mirror, os seus administradores, directores, colaboradores e agentes, de e
                contra quaisquer reclamações, responsabilidades, danos, perdas e despesas,
                incluindo, sem limitação, honorários advocatícios razoáveis, decorrentes de ou
                de alguma forma relacionados com: (a) o acesso ou utilização do Serviço pelo
                Utilizador; (b) a violação dos presentes termos pelo Utilizador; (c) a violação
                de quaisquer direitos de terceiros pelo Utilizador.
              </p>
            </section>

            {/* 11. Direitos do titular */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                11. Direitos do Titular dos Dados
              </h3>
              <p>
                Nos termos do RGPD e da Lei n.º 58/2019, são reconhecidos ao Utilizador os
                seguintes direitos:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2 ml-2">
                <li><span className="text-foreground font-medium">Acesso</span> (Art. 15.º)</li>
                <li><span className="text-foreground font-medium">Retificação</span> (Art. 16.º)</li>
                <li><span className="text-foreground font-medium">Apagamento</span> (Art. 17.º)</li>
                <li><span className="text-foreground font-medium">Limitação do tratamento</span> (Art. 18.º)</li>
                <li><span className="text-foreground font-medium">Portabilidade</span> (Art. 20.º)</li>
                <li><span className="text-foreground font-medium">Oposição</span> (Art. 21.º)</li>
                <li><span className="text-foreground font-medium">Retirada do consentimento</span> a qualquer momento</li>
              </ul>
              <p className="mt-3">
                Contacto:{" "}
                <span className="text-[#00D4FF]">privacidade@mirror.app</span>.
                Prazo de resposta: 30 dias.
              </p>
            </section>

            {/* 12. Reclamação */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                12. Autoridade de Controlo
              </h3>
              <div className="p-4 rounded-xl bg-muted/30 border border-border/30">
                <p className="text-foreground font-medium">CNPD</p>
                <p className="mt-1">Av. D. Carlos I, 134 - 1.º, 1200-651 Lisboa</p>
                <p className="mt-1"><span className="text-[#00D4FF]">www.cnpd.pt</span> | <span className="text-[#00D4FF]">geral@cnpd.pt</span></p>
              </div>
            </section>

            {/* 13. Cookies */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                13. Cookies
              </h3>
              <p>
                Este website utiliza exclusivamente cookies estritamente necessários, isentos
                de consentimento nos termos da Diretiva ePrivacy e da Lei n.º 41/2004.
              </p>
            </section>

            {/* 14. Menores */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                14. Menores
              </h3>
              <p>
                Idade mínima: 16 anos (RGPD Art. 8.º, Lei 58/2019 Art. 16.º).
              </p>
            </section>

            {/* 15. Lei Aplicável e Foro */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                15. Lei Aplicável e Foro Competente
              </h3>
              <p>
                Os presentes termos e condições regem-se pela legislação da República
                Portuguesa. Para a resolução de quaisquer litígios emergentes da
                interpretação ou execução dos presentes termos, incluindo questões
                relativas à sua existência, validade e efeitos, é competente, com
                renúncia a qualquer outro, o foro da comarca de Lisboa, salvo quando
                o Utilizador tenha qualidade de consumidor nos termos da Lei n.º 24/96,
                de 31 de Julho, caso em que serão aplicáveis as regras gerais de
                competência territorial.
              </p>
            </section>

            {/* 16. Disposições Finais */}
            <section>
              <h3 className="text-base font-semibold text-foreground mb-2">
                16. Disposições Finais
              </h3>
              <p>
                A nulidade ou anulabilidade de qualquer das cláusulas do presente instrumento
                não prejudica a validade das restantes, que se manterão em pleno vigor e
                efeito. A tolerância ou não exercício pela Mirror de qualquer direito previsto
                nos presentes termos não constituirá renúncia ao mesmo, podendo ser exercido
                a qualquer momento. A Mirror reserva-se o direito de modificar unilateralmente
                os presentes termos a qualquer momento, sendo as alterações comunicadas ao
                Utilizador por e-mail com antecedência mínima de 15 (quinze) dias. A
                continuação da utilização do Serviço após a comunicação das alterações
                constitui aceitação tácita dos novos termos.
              </p>
            </section>

            {/* Data de atualização */}
            <div className="pt-4 border-t border-border/30">
              <p className="text-xs text-muted-foreground/70">
                Última atualização: março de 2026
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                Regulamento (UE) 2016/679 (RGPD) · Lei n.º 58/2019 · Lei n.º 41/2004 ·
                Regulamento (UE) 2017/745 (MDR) · Lei n.º 24/96 (Defesa do Consumidor) ·
                Orientações da CNPD
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
