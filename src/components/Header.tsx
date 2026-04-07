import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onViewChange: (view: 'landing' | 'dashboard') => void;
  currentView: 'landing' | 'dashboard';
}

export default function Header({ onViewChange, currentView }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      {/* Top Bar (Only visible on large screens) */}
      <div className={`hidden md:block border-b pb-2 mb-2 transition-colors duration-300 ${isScrolled ? "border-gray-100" : "border-white/10"}`}>
        <div className={`container-custom flex justify-between items-center text-sm transition-colors duration-300 ${isScrolled ? "text-accent" : "text-white"}`}>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={14} className={isScrolled ? "text-accent" : "text-white"} />
              (870) 275-1643
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} className={isScrolled ? "text-accent" : "text-white"} />
              5173 AR 1 Jonesboro, Arkansas
            </span>
          </div>
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-4 py-1 rounded-full text-accent font-semibold text-sm">
                          <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                          Now Serving Jonesboro Harrisburg and surrounding areas
          </div>
        </div>
      </div>

      <nav className="container-custom flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-14 h-10 relative bg-primary flex items-center justify-center rounded-sm transform group-hover:rotate-3 transition-transform overflow-hidden shadow-md">
            {/* American Flag Background */}
            <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
      <div class="w-0.5 h-0.5 bg-white rounded-full"></div>
    </div>
  </div>

  <span class="relative z-10 text-yellow-400 font-black text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">AMS</span>
</div>
            {/* Logo Text */}
            <span className="relative z-10 text-yellow-400 font-black text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">AMS</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-xl leading-none ${isScrolled ? "text-primary" : "text-primary md:text-white"}`}>
              AMERICAN
            </span>
            <span className={`font-semibold text-sm tracking-widest ${isScrolled ? "text-accent" : "text-accent md:text-red-200"}`}>
              MINI-STORAGE
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {currentView === 'landing' ? (
            <>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium hover:text-accent transition-colors ${
                    isScrolled ? "text-gray-700" : "text-gray-700 md:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              
            </>
          ) : (
            <button
              onClick={() => onViewChange('landing')}
              className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2"
            >
              Back to Website
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 ${isScrolled ? "text-primary" : "text-primary md:text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {currentView === 'landing' ? (
                <>
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium text-gray-700 hover:text-accent"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                  
                </>
              ) : (
                <button
                  className="bg-primary text-white text-center py-3 rounded-sm font-semibold mt-2"
                  onClick={() => {
                    onViewChange('landing');
                    setIsMenuOpen(false);
                  }}
                >
                  Back to Website
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
