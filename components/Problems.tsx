"use client";

import { motion } from "motion/react";
import { Clock, AlertTriangle, FileSpreadsheet, Frown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: Clock,
    title: "Perda de tempo",
    description: "Horas preenchendo dados manualmente no Receita Saúde",
  },
  {
    icon: AlertTriangle,
    title: "Risco de erros",
    description: "Problemas com a Receita Federal por informações incorretas",
  },
  {
    icon: FileSpreadsheet,
    title: "Planilhas confusas",
    description: "Controles manuais e desorganizados que geram retrabalho",
  },
  {
    icon: Frown,
    title: "Falta de organização",
    description: "Dificuldade em manter histórico completo dos atendimentos",
  },
];

export function Problems() {
  return (
    <section className="py-15 md:py-32 relative" data-testid="problems-section">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            O Problema
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6">
            Você ainda perde tempo com isso?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Muitos profissionais da saúde estão gastando horas com processos que
            poderiam ser automatizados.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="group h-full border-white/5 bg-card/50 hover:border-primary transition-all duration-300"
                data-testid={`problem-card-${index}`}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                    <problem.icon className="w-7 h-7 text-destructive" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2 text-white">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
