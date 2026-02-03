import { Header, Footer } from "@/components/layout";
import { Hero, Portfolio, About, Contact, Pricing } from "@/components/sections";

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
