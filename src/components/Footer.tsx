import { Facebook, Twitter, Instagram, Phone, Mail, MapPin, ChevronRight, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "Our Services", href: "#services" },
        { name: "Unit Sizes", href: "#pricing" },
        { name: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "Storage Solutions",
      links: [
        { name: "Personal Storage", href: "#services" },
        { name: "Business Storage", href: "#services" },
        { name: "Vehicle Storage", href: "#services" },
        { name: "Car & Boat Storage", href: "#services" },
        { name: "Climate Controlled", href: "#services" },
      ],
    },
    {
      title: "Customer Support",
      links: [
        { name: "FAQs", href: "#faq" },
        { name: "Online Payments", href: "#contact" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
      {/* Subtle Patriotic Wave (SVG) */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden pointer-events-none opacity-10">
        <svg viewBox="0 0 1440 320" className="w-full h-full preserve-3d">
          <path
            fill="#d32f2f"
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-8 group">
              <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-sm transform group-hover:rotate-3 transition-transform">
                <span className="text-white font-bold text-xl">AS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none text-white">AMERICAN</span>
                <span className="font-semibold text-sm tracking-widest text-accent">MINI-STORAGE</span>
              </div>
            </a>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Providing secure, affordable, and convenient storage solutions 
              for the Arkansas community. Your space, your way.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 text-white flex items-center justify-center rounded-sm hover:bg-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 text-white flex items-center justify-center rounded-sm hover:bg-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 text-white flex items-center justify-center rounded-sm hover:bg-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="text-xl font-bold mb-8 text-white relative inline-block">
                {section.title}
                <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-accent"></span>
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, lIndex) => (
                  <li key={lIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <div className="grid md:grid-cols-3 gap-8 py-12 border-y border-white/10 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-sm">
              <Phone className="text-accent" size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Call Us</p>
              <p className="text-lg font-bold">(870) 275-1643</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-sm">
              <Mail className="text-accent" size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Email Us</p>
              <p className="text-lg font-bold">amsionesboro@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-sm">
              <MapPin className="text-accent" size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Visit Us</p>
              <p className="text-lg font-bold">5173 AR 1 Jonesboro, Arkansas</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm">
          <p>© {currentYear} American Mini-Storage. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-accent" />
            <span>Secure SSL Encrypted Payment Portal</span>
          </div>
          <p>Designed with Pride in Arkansas</p>
        </div>
      </div>
    </footer>
  );
}
