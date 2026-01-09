"use client";

import { motion } from "motion/react";
import { Stethoscope, Brain, Smile, Activity, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const audiences = [
  {
    icon: Stethoscope,
    title: "Médicos",
    description: "Clínicos gerais e especialistas",
  },
  {
    icon: Smile,
    title: "Dentistas",
    description: "Consultórios odontológicos",
  },
  {
    icon: Activity,
    title: "Fisioterapeutas",
    description: "Clínicas e atendimento domiciliar",
  },
  {
    icon: Brain,
    title: "Psicólogos",
    description: "Atendimento clínico e online",
  },
  {
    icon: Heart,
    title: "Outros profissionais",
    description: "Fonoaudiólogos, nutricionistas e mais",
  },
];

export function Target() {
  return (
    <section
      id="para-quem"
      className="py-20 md:py-32 relative bg-card/30"
      data-testid="target-audience-section"
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
            Para Quem
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6">
            Feito para profissionais da{" "}
            <span className="gradient-text">saúde</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Se você precisa declarar atendimentos no Receita Saúde, o SISA é
            para você.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group h-full"
            >
              <Card
                className="group h-full text-center border-white/50 bg-background/50 hover:border-primary/70 transition-all duration-300"
                data-testid={`audience-card-${index}`}
              >
                <CardContent className="p-6 flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4 glow-primary group-hover:scale-110 transition-transform duration-300">
                    <audience.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-1 text-white">
                    {audience.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {audience.description}
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
