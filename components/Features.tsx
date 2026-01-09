"use client";

import { motion } from "motion/react";
import {
  Users,
  CalendarDays,
  Receipt,
  History,
  FileDown,
  Zap,
  Smartphone,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Cadastro de pacientes",
    description:
      "Gerencie todos os seus pacientes em um só lugar com informações completas.",
  },
  {
    icon: CalendarDays,
    title: "Agenda de atendimentos",
    description:
      "Visualize e organize sua agenda de forma intuitiva e prática.",
  },
  {
    icon: Receipt,
    title: "Registro de valores",
    description:
      "Controle os valores de cada atendimento com precisão e facilidade.",
  },
  {
    icon: FileDown,
    title: "Exportação automática",
    description: "Gere arquivos compatíveis com o Receita Saúde em segundos.",
  },
  {
    icon: Zap,
    title: "Interface rápida",
    description: "Sistema leve e responsivo para máxima produtividade.",
  },
  {
    icon: Smartphone,
    title: "Acesso multiplataforma",
    description: "Use pelo computador ou celular, onde e quando precisar.",
  },
];

export function Features() {
  return (
    <section
      id="funcionalidades"
      className="py-20 md:py-32 relative"
      data-testid="features-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Funcionalidades
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6">
            Tudo que você precisa em{" "}
            <span className="gradient-text">um só lugar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ferramentas pensadas para simplificar sua rotina administrativa.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <Card
                className="group h-full glass-card hover:border-primary/30 transition-all duration-300"
                data-testid={`feature-card-${index}`}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
