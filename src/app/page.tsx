import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Services from "@/components/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Атанас Маринов - Довършителни ремонти | Пловдив",
  description:
    "Професионални довършителни ремонти, гипсов картон, окачени тавани, шпакловки и боядисване в Пловдив. Над 10 години опит. Безплатна оценка.",
  alternates: {
    canonical: "https://atanasmarinov-eood.com",
  },
};

// Structured data for local business
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Атанас Маринов - Довършителни ремонти",
  description: "Професионални довършителни ремонти, гипсов картон, окачени тавани, шпакловки и боядисване",
  url: "https://atanasmarinov-eood.com",
  telephone: "+359892941814",
  email: "atanasmarinoveood@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Пловдив",
    addressCountry: "BG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "42.1354",
    longitude: "24.7453",
  },
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-15:00"],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "42.1354",
      longitude: "24.7453",
    },
    geoRadius: "50000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Строителни услуги",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Гипсов картон",
          description: "Монтаж на гипсокартонени конструкции, преградни стени, окачени тавани",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Шпакловки и боядисване",
          description: "Професионални шпакловки, грундиране и боядисване с висококачествени латексови бои",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Довършителни работи",
          description: "Пълен спектър от довършителни строителни работи за жилищни и офис сгради",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "150",
  },
};

const Home: React.FC = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <main className="min-h-screen">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;
