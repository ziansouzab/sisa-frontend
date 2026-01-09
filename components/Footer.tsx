"use client";

import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-12" data-testid="footer">
      <Separator className="mb-12 bg-white/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 max-h-15"
          >
            <Image
              src={"/Logo Sisa.png"}
              alt="Sisa Logo"
              width={180}
              height={80}
              data-testid="hero-dashboard-image"
            />
          </motion.div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="#"
              className="hover:text-white transition-colors"
              data-testid="footer-terms"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              data-testid="footer-privacy"
            >
              Política de Privacidade
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SISA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
