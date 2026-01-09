import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Problems } from "@/components/Problems";
import { Solution } from "@/components/Solutions";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problems />
      <Solution />
    </>
  );
}
