import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Contact from "@/components/Contact";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const Index = () => {
  console.log("Index component rendering...");
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <About />
      <Contact />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;