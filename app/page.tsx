import Hero from "@/components/ui/hero";
import Footer from "@/components/ui/footer";
import React from "react";
import About from "@/components/ui/about";
import Features from "@/components/ui/features";
import Contact from "@/components/ui/contact";

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
