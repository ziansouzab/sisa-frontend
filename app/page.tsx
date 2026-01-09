import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Problems } from "@/components/Problems";
import { Solution } from "@/components/Solutions";
import { Features } from "@/components/Features";
import { Target } from "@/components/Target";
import { Benefits } from "@/components/Benefits";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problems />
      <Solution />
      <Features />
      <Target />
      <Benefits />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
