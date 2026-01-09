"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Para Quem", href: "#para-quem" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card p-2"
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="/"
            className="flex items-center gap-2"
            data-testid="logo-link"
          >
            <Image
              src={"/Logo Sisa.png"}
              alt="SISA Dashboard - Interface do sistema"
              width={220}
              height={100}
              data-testid="hero-dashboard-image"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-white/70 hover:text-white transition-colors duration-200"
                data-testid={`nav-link-${link.label
                  .toLowerCase()
                  .replace(/\s/g, "-")}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              className="rounded-full gradient-bg border-0 glow-primary hover:opacity-90"
            >
              <a href="#contato" data-testid="cta-button-nav">
                Começar agora
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            data-testid="mobile-menu-toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-white/5"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-muted-foreground hover:text-white transition-colors"
                  data-testid={`mobile-nav-link-${link.label
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="w-full rounded-full gradient-bg border-0"
              >
                <a
                  href="#contato"
                  onClick={() => setIsOpen(false)}
                  data-testid="mobile-cta-button"
                >
                  Começar agora
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
