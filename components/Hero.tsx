"use client";

import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-noise"
      data-testid="hero-section"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge
                variant="outline"
                className="px-4 py-2 rounded-full border-primary/30 bg-primary/10 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
                <span className="text-sm font-medium text-primary">
                  Sistema aprovado por profissionais
                </span>
              </Badge>
            </motion.div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Organize seus atendimentos e gere o arquivo do{" "}
              <span className="gradient-text">Receita Saúde</span> em poucos
              cliques
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              O SISA é o sistema que ajuda profissionais da saúde a registrar
              atendimentos, valores e exportar tudo pronto para o Receita Saúde,
              sem planilhas e sem dor de cabeça.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full gradient-bg border-0 text-lg px-8 py-6 glow-primary"
                >
                  <a href="#contato" data-testid="hero-cta-primary">
                    Quero facilitar minha rotina
                    <ArrowRight size={20} className="ml-2" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full text-lg px-8 py-6 border-white/20 hover:bg-white/5"
                >
                  <a href="#solucao" data-testid="hero-cta-secondary">
                    <Play size={20} className="mr-2 text-primary" />
                    Ver como funciona
                  </a>
                </Button>
              </motion.div>
            </div>

            <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <p className="font-display font-bold text-3xl gradient-text">
                  100%
                </p>
                <p className="text-sm text-muted-foreground">Compatível</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <p className="font-display font-bold text-3xl gradient-text">
                  5min
                </p>
                <p className="text-sm text-muted-foreground">Para exportar</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <p className="font-display font-bold text-3xl gradient-text">
                  0
                </p>
                <p className="text-sm text-muted-foreground">Erros fiscais</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden border-white/10 border-4 shadow-2xl">
              <Image
                src={"/Logo Sisa.png"}
                alt="SISA Dashboard - Interface do sistema"
                fill
                className="object-contain"
                data-testid="hero-dashboard-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 p-4 rounded-xl glass-card-accent shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Arquivo exportado</p>
                  <p className="text-sm text-muted-foreground">
                    Pronto para upload
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
