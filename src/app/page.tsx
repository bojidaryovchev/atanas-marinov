import About from "@/components/about";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Services from "@/components/services";
import { Contact } from "lucide-react";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
