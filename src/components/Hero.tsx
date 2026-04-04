import { motion } from "motion/react";
import { ChevronRight, ShieldCheck, Clock, MapPin } from "lucide-react";

interface HeroProps {
  onManageStorage: () => void;
}

export default function Hero({ onManageStorage }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="storefront.png"
          alt="American Mini-Storage Facility"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-3xl"
        >
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            American <br />
            <span className="text-accent">Mini-Storage</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
            Premium storage solutions for your home, business, and vehicles. 
            Safe, simple, and secure with 24/7 gated access.
          </p>

          {/* Reserve Box - Now moved below the heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="bg-white p-6 md:p-8 rounded-sm shadow-2xl border-t-4 border-accent max-w-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary">Reserve Your Unit</h3>
                  <p className="text-gray-600 text-sm">Lock in our best rates today.</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Starts at</p>
                  <p className="text-2xl font-bold text-accent">$45/mo</p>
                </div>
              </div>
              
              <form className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Unit Size</label>
                  <select className="w-full border border-gray-200 p-3 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-700 font-medium">
                    <option>5' x 10' - Small</option>
                    <option>10' x 10' - Medium</option>
                    <option>10' x 20' - Large</option>
                    <option>Car / Boat Storage</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="w-full md:w-auto bg-primary hover:bg-blue-900 text-white px-8 py-3.5 rounded-sm font-bold transition-all shadow-lg whitespace-nowrap">
                    Check Availability
                  </button>
                </div>
              </form>
              
              <div className="mt-4 flex items-center gap-4 text-xs text-gray-400 font-medium">
                <span className="flex items-center gap-1"><ShieldCheck size={14} /> No Deposit</span>
                <span className="flex items-center gap-1"><Clock size={14} /> Flexible Terms</span>
              </div>
            </div>
          </motion.div>

          <div className="mb-6 bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-sm inline-block">
            <p className="text-white font-semibold flex items-center gap-2">
              <span className="bg-accent text-white text-[10px] px-2 py-0.5 rounded-full uppercase font-black">Special Offer</span>
              10% OFF for First Responders, Teachers, & Clergy
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#pricing"
              className="bg-accent hover:bg-red-700 text-white px-8 py-4 rounded-sm font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-2xl active:scale-95"
            >
              View All Units <ChevronRight size={20} />
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-6 mt-6 pt-4 border-t border-white/10">
            <div className="flex flex-col gap-2">
              <ShieldCheck className="text-accent" size={32} />
              <span className="font-semibold">Gated Access</span>
            </div>
            <div className="flex flex-col gap-2">
              <Clock className="text-accent" size={32} />
              <span className="font-semibold">24/7 Access</span>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=5173+AR+1+Jonesboro+Arkansas" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col gap-2 hover:text-accent transition-colors group"
            >
              <MapPin className="text-accent group-hover:scale-110 transition-transform" size={32} />
              <span className="font-semibold text-xs sm:text-sm">5173 AR 1 Jonesboro, Arkansas Location</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle Patriotic Wave (SVG) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden pointer-events-none opacity-20">
        <svg viewBox="0 0 1440 320" className="w-full h-full preserve-3d">
          <path
            fill="#d32f2f"
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
