"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Spinner } from "@/components/ui/spinner"
import { Check, Heart, ArrowRight, Shield, Users, AlertCircle } from "lucide-react"
import { PrivacyPolicyModal } from "@/components/privacy-policy-modal"
import { supabase } from "@/lib/supabase"

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [consentGiven, setConsentGiven] = useState(false)
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const validateEmail = useCallback((email: string): string | undefined => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return "Por favor, introduz um endereço de e-mail válido."
    }
    return undefined
  }, [])

  const validatePhone = useCallback((phone: string): string | undefined => {
    if (!phone.trim()) return undefined // phone is optional
    const stripped = phone.replace(/[\s\-]/g, "")
    const ptPhoneRegex = /^(?:\+?351)?[92]\d{8}$/
    if (!ptPhoneRegex.test(stripped)) {
      return "Por favor, introduz um número de telefone português válido (ex: +351 912 345 678)."
    }
    return undefined
  }, [])

  const handleBlur = useCallback((field: "email" | "phone") => {
    const value = formData[field]
    const validationError = field === "email" ? validateEmail(value) : validatePhone(value)
    setErrors((prev) => ({ ...prev, [field]: validationError }))
  }, [formData, validateEmail, validatePhone])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consentGiven) return

    const emailError = validateEmail(formData.email)
    const phoneError = validatePhone(formData.phone)
    const newErrors = { email: emailError, phone: phoneError }
    setErrors(newErrors)
    if (emailError || phoneError) return

    setIsSubmitting(true)
    setError(null)

    try {
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          consent_given: true,
        })

      if (supabaseError) throw supabaseError
      setIsSubmitted(true)
    } catch (err) {
      console.error('Lead submission failed:', err)
      setError('Ocorreu um erro ao submeter. Por favor, tenta novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="relative p-8 sm:p-10 rounded-3xl bg-card/40 backdrop-blur-2xl border border-border/30 overflow-hidden">
        {/* Success background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E91E8C]/10 via-[#7B2FBF]/5 to-[#00D4FF]/10" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#E91E8C]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#00D4FF]/20 rounded-full blur-3xl" />

        <div className="relative text-center">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-[#E91E8C] to-[#00D4FF] flex items-center justify-center glow-magenta">
            <Check className="w-12 h-12 text-white" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4 gradient-text">
            Estás dentro!
          </h3>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Boa, <span className="text-foreground font-medium">{formData.name.split(' ')[0]}</span>!
            Vamos avisar-te assim que o Mirror estiver pronto. Fica atento ao e-mail.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-card/50 rounded-xl py-3 px-4">
            <Heart className="w-4 h-4 text-[#E91E8C] animate-pulse" />
            <span>Tu cuidas de ti. Nós tratamos do resto.</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative p-6 sm:p-8 rounded-3xl bg-card/40 backdrop-blur-2xl border border-border/30 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#E91E8C]/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#00D4FF]/15 rounded-full blur-3xl" />
      </div>

      {/* Gradient border */}
      <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-[#E91E8C]/40 via-transparent to-[#00D4FF]/40 pointer-events-none" />

      <div className="relative">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E91E8C]/20 to-[#00D4FF]/20 mb-4">
            <Heart className="w-7 h-7 text-[#E91E8C]" />
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold mb-2 text-foreground">
            Entra na lista
          </h3>
          <p className="text-sm text-muted-foreground">
            Sê dos primeiros a experimentar o Mirror.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              Nome completo
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="O teu nome"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-13 bg-background/60 border-border/50 focus:border-[#E91E8C] focus:ring-[#E91E8C]/30 rounded-xl placeholder:text-muted-foreground/50 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="email@exemplo.pt"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onBlur={() => handleBlur("email")}
              className="h-13 bg-background/60 border-border/50 focus:border-[#E91E8C] focus:ring-[#E91E8C]/30 rounded-xl placeholder:text-muted-foreground/50 text-base"
            />
            {errors.email && (
              <p className="text-sm text-red-400" role="alert">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-foreground">
              Telemóvel <span className="text-muted-foreground font-normal">(opcional)</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+351 912 345 678"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              onBlur={() => handleBlur("phone")}
              className="h-13 bg-background/60 border-border/50 focus:border-[#E91E8C] focus:ring-[#E91E8C]/30 rounded-xl placeholder:text-muted-foreground/50 text-base"
            />
            {errors.phone && (
              <p className="text-sm text-red-400" role="alert">{errors.phone}</p>
            )}
          </div>

          {/* Consent checkbox */}
          <div className="flex items-start gap-3">
            <Checkbox
              id="consent"
              checked={consentGiven}
              onCheckedChange={(checked) => setConsentGiven(checked === true)}
              className="mt-0.5 border-border/50 data-[state=checked]:bg-[#E91E8C] data-[state=checked]:border-[#E91E8C]"
            />
            <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
              Li e aceito a{" "}
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(true)}
                className="text-[#00D4FF] underline underline-offset-2 hover:text-[#00D4FF]/80 transition-colors"
              >
                política de privacidade
              </button>
            </Label>
          </div>

          {/* Error message */}
          {error && (
            <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 rounded-xl px-4 py-3" role="alert">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting || !consentGiven}
            className="w-full h-14 bg-gradient-to-r from-[#E91E8C] to-[#00D4FF] hover:opacity-90 transition-all duration-300 text-white font-bold rounded-xl text-base glow-magenta disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <Spinner className="w-5 h-5" />
            ) : (
              <>
                Quero entrar
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </form>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-border/30">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Shield className="w-4 h-4 text-[#00D4FF]" />
            <span>Dados protegidos (RGPD)</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Users className="w-4 h-4 text-[#E91E8C]" />
            <span>+500 interessados</span>
          </div>
        </div>
      </div>

      <PrivacyPolicyModal open={privacyModalOpen} onOpenChange={setPrivacyModalOpen} />
    </div>
  )
}
