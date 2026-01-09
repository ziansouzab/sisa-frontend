"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function CTA() {
  return (
    <section
      className="py-20 md:py-32 relative overflow-hidden"
      data-testid="cta-section"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[150px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="glass-card border-primary/20 glow-primary">
            <CardContent className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 rounded-full border-accent/30 bg-accent/10"
                >
                  <Sparkles className="w-4 h-4 text-accent mr-2" />
                  <span className="text-sm font-medium text-accent">
                    Oferta de lançamento
                  </span>
                </Badge>
              </motion.div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
                Pronto para simplificar sua rotina e ficar em dia com o{" "}
                <span className="gradient-text">Receita Saúde?</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Comece a usar o SISA e foque no que realmente importa: seus
                pacientes.
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full gradient-bg border-0 text-lg px-10 py-6 glow-primary"
                >
                  <a href="#contato" data-testid="cta-main-button">
                    Quero usar o SISA
                    <ArrowRight size={22} className="ml-2" />
                  </a>
                </Button>
              </motion.div>

              <p className="mt-6 text-sm text-muted-foreground">
                Comece hoje mesmo a ter agilidade no seu consultório
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
