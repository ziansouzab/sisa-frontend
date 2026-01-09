"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    profession: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contato"
      className="py-20 md:py-32 relative bg-card/30"
      data-testid="contact-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Contato
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6">
              Solicite uma <span className="gradient-text">demonstração</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Seja mais um profissional satisfeito, utilize o SISA e ganhe
              agilidade e produtividade para seu consultório!
            </p>

            <div className="space-y-4">
              <Card className="border-white/10 bg-background/50 hover:border-primary/30 transition-colors">
                <a
                  href="mailto:contato@sisa.com.br"
                  className="block"
                  data-testid="contact-email-link"
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">E-mail</p>
                      <p className="text-muted-foreground">
                        contato@sisa.com.br
                      </p>
                    </div>
                  </CardContent>
                </a>
              </Card>

              <Card className="border-white/10 bg-background/50 hover:border-primary/30 transition-colors">
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  data-testid="contact-whatsapp-link"
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">WhatsApp</p>
                      <p className="text-muted-foreground">Fale conosco</p>
                    </div>
                  </CardContent>
                </a>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card" data-testid="contact-form">
              <CardHeader>
                <CardTitle className="font-display font-bold text-2xl text-white">
                  Quero uma demonstração
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-background/50 border-white/10 focus:border-primary/50"
                      placeholder="Seu nome"
                      data-testid="input-name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-background/50 border-white/10 focus:border-primary/50"
                      placeholder="seu@email.com"
                      data-testid="input-email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">Whatsapp</Label>
                    <Input
                      type="telefone"
                      id="telefone"
                      required
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({ ...formData, whatsapp: e.target.value })
                      }
                      className="bg-background/50 border-white/10 focus:border-primary/50"
                      placeholder="(xx) xxxxx-xxxx"
                      data-testid="input-whatsapp"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="profession">Profissão</Label>
                    <Select
                      required
                      value={formData.profession}
                      onValueChange={(value) =>
                        setFormData({ ...formData, profession: value })
                      }
                    >
                      <SelectTrigger
                        className="bg-background/50 border-white/10 focus:border-primary/50"
                        data-testid="select-profession"
                      >
                        <SelectValue placeholder="Selecione sua profissão" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="medico">Médico(a)</SelectItem>
                        <SelectItem value="dentista">Dentista</SelectItem>
                        <SelectItem value="fisioterapeuta">
                          Fisioterapeuta
                        </SelectItem>
                        <SelectItem value="psicologo">Psicólogo(a)</SelectItem>
                        <SelectItem value="nutricionista">
                          Nutricionista
                        </SelectItem>
                        <SelectItem value="fonoaudiologo">
                          Fonoaudiólogo(a)
                        </SelectItem>
                        <SelectItem value="outro">
                          Outro profissional da saúde
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full mt-4 rounded-xl gradient-bg border-0 glow-primary"
                      data-testid="button-submit"
                    >
                      Solicitar Contato
                      <Send size={20} className="ml-2" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
