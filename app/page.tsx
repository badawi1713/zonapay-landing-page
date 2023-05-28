import About from "@/components/ui/about";
import Contact from "@/components/ui/contact";
import Features from "@/components/ui/features";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";

function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero />
      {/* About */}
      <About />
      {/* Features */}
      <Features />
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />
    </main>
  );
}

export default Home;
