import { Header, Footer } from "@/components/layout";
import { Hero } from "@/components/sections";
import dynamic from "next/dynamic";

// Lazy load non-critical sections
const Portfolio = dynamic(() => import("@/components/sections").then((mod) => mod.Portfolio), {
  loading: () => <div className="min-h-screen bg-black/50" />, // Simple placeholder
});
const About = dynamic(() => import("@/components/sections").then((mod) => mod.About));
const Contact = dynamic(() => import("@/components/sections").then((mod) => mod.Contact));
const Pricing = dynamic(() => import("@/components/sections").then((mod) => mod.Pricing));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
