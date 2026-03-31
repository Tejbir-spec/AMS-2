import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StorageDashboard from "./components/StorageDashboard";

export default function App() {
  const [view, setView] = useState<'landing' | 'dashboard'>('landing');

  return (
    <div className="min-h-screen flex flex-col">
      <Header onViewChange={setView} currentView={view} />
      <main className="flex-grow">
        {view === 'landing' ? (
          <>
            <Hero onManageStorage={() => setView('dashboard')} />
            <About />
            <Services />
            <Features />
            <Pricing />
            <Gallery />
            <FAQ />
            <Testimonials />
            <Contact />
          </>
        ) : (
          <StorageDashboard />
        )}
      </main>
      <Footer />
    </div>
  );
}
