import Link from "next/link"
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react"
import { Logo } from "@/components/logo"

const footerLinks = {
  produto: [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Planos", href: "#precos" },
    { label: "FAQ", href: "#faq" },
  ],
  empresa: [
    { label: "Sobre nós", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contacto", href: "#" },
  ],
  legal: [
    { label: "Privacidade", href: "#" },
    { label: "Termos de utilização", href: "#" },
    { label: "RGPD", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contacto@mirror.app", label: "Email" },
]

export function Footer() {
  return (
    <footer className="relative bg-card/50 backdrop-blur-sm border-t border-border/50 py-16">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E91E8C]/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Logo />
            </Link>
            <p className="text-muted-foreground max-w-xs mb-6 leading-relaxed">
              O teu companheiro diário para autoconhecimento e bem-estar emocional,
              potenciado por inteligência artificial.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center hover:bg-[#E91E8C]/20 hover:text-[#E91E8C] transition-all duration-300 text-muted-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Produto</h4>
            <ul className="space-y-3">
              {footerLinks.produto.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-[#E91E8C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-[#E91E8C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-[#E91E8C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              {new Date().getFullYear()} Mirror. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground text-sm">
              Feito com <span className="text-[#E91E8C]">&#9829;</span> em Portugal
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
