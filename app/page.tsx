// app/page.tsx
import About from "@/components/Index/About";
import Community from "@/components/Index/Community";
import Features from "@/components/Index/Features";
import Footer from "@/components/Index/Footer";
import Header from "@/components/Index/Header";
import Hero from "@/components/Index/Hero";

export default function HomePage() {
  return (
    // div utama dengan class Tailwind sudah tidak diperlukan lagi
    <>
      <main>
        <div className="position-relative">
          <Header />
          <Hero />
        </div>
        <About />
        <Features />
        <Community />
      </main>
      <Footer />
    </>
  );
}
