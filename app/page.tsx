import About from "@/components/Index/About";
import Community from "@/components/Index/Community";
import Features from "@/components/Index/Features";
import Footer from "@/components/Index/Footer";
import Header from "@/components/Index/Header";
import Hero from "@/components/Index/Hero";

export default function LandingPage() {
  return (
    <main className="bg-black min-vh-100">
      <Header />
      <Hero />
      <About />
      <Features />
      <Community />
      <Footer />
    </main>
  );
}
