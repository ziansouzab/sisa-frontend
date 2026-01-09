"use client";

import { motion } from "framer-motion";
import { UserPlus, Calendar, DollarSign, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Cadastre seus pacientes",
    description:
      "Adicione seus pacientes uma única vez e tenha todas as informações organizadas.",
  },
  {
    icon: Calendar,
    step: "02",
    title: "Registre e agende atendimentos",
    description:
      "Controle sua agenda e registre cada consulta de forma simples e rápida.",
  },
  {
    icon: DollarSign,
    step: "03",
    title: "Informe os valores",
    description:
      "Registre os valores cobrados e mantenha o controle financeiro em dia.",
  },
  {
    icon: Download,
    step: "04",
    title: "Exporte o arquivo",
    description:
      "Gere o arquivo pronto para upload direto no Receita Saúde com um clique.",
  },
];

export function Solution() {
  return (
    <section
      id="solucao"
      className="py-15 md:py-20 relative bg-card/30 border-b-2 border-primary/20"
      data-testid="solution-section"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            A Solução
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6">
            O SISA resolve tudo isso{" "}
            <span className="gradient-text">para você</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um fluxo simples e intuitivo que transforma horas de trabalho em
            poucos minutos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group h-full"
              data-testid={`solution-step-${index}`}
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-white/35 from-primary/50 to-transparent" />
              )}

              <Card className="relative h-full border-white/35 bg-background/50 backdrop-blur-sm hover:border-primary transition-all duration-300">
                <CardContent className="p-6 flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center shrink-0 glow-primary">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="font-display font-bold text-4xl text-white/70 group-hover:text-primary/80 transition-colors">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2 text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/70">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
