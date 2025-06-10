import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Services from "@/components/services";

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
