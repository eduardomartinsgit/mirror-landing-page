"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useLanguage } from "@/lib/i18n/context"

interface PrivacyPolicyModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PrivacyPolicyModal({ open, onOpenChange }: PrivacyPolicyModalProps) {
  const { t, ta } = useLanguage()
  const sections = ta<{ title: string; content: string }>("privacyPolicy.sections")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[85vh] bg-card border-border/50">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl gradient-text">
            {t("privacyPolicy.title")}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {t("privacyPolicy.subtitle")}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            {sections.map((section, i) => (
              <section key={i}>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {section.title}
                </h3>
                {section.content.split("\n").map((paragraph, pi) => {
                  if (paragraph.startsWith("\u2022")) {
                    return (
                      <p key={pi} className="ml-4">
                        {paragraph}
                      </p>
                    )
                  }
                  return paragraph.trim() ? (
                    <p key={pi} className={pi > 0 ? "mt-2" : ""}>
                      {paragraph}
                    </p>
                  ) : null
                })}
              </section>
            ))}

            {/* Data de atualização */}
            <div className="pt-4 border-t border-border/30">
              <p className="text-xs text-muted-foreground/70">
                {t("privacyPolicy.lastUpdate")}
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                {t("privacyPolicy.legalRefs")}
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
