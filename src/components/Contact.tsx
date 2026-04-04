import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, Facebook, Twitter, Instagram } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="text-accent" size={24} />,
      title: "Phone Number",
      value: "(870) 275-1643",
      href: "tel:8702751643",
    },
    {
      icon: <Mail className="text-accent" size={24} />,
      title: "Email Address",
      value: "amsionesboro@gmail.com",
      href: "mailto:amsionesboro@gmail.com",
    },
    {
      icon: <MapPin className="text-accent" size={24} />,
      title: "Location",
      value: "5173 AR 1 Jonesboro, Arkansas",
      href: "https://www.google.com/maps/search/?api=1&query=5173+AR+1+Jonesboro+Arkansas",
    },
    {
      icon: <Clock className="text-accent" size={24} />,
      title: "Office Hours",
      value: "Mon-Fri: 10AM - 4PM (By Appointment)",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-neutral-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-accent"></span>
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Have Questions? <br />
              <span className="text-accent">We're Here to Help</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Our friendly on-site management is ready to assist you with any 
              questions about our units, pricing, or security features. 
              Reach out to us to schedule an appointment today!
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex gap-4 p-4 bg-white rounded-sm border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all group"
                >
                  <div className="shrink-0 transform group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">{info.title}</h4>
                    <p className="text-gray-600 text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="font-bold text-primary uppercase tracking-widest text-sm">Follow Us:</span>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-sm hover:bg-accent transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-sm hover:bg-accent transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-sm shadow-2xl border-t-4 border-accent"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 p-4 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full border border-gray-200 p-4 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full border border-gray-200 p-4 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="(870) 275-1643"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <select className="w-full border border-gray-200 p-4 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                  <option>General Inquiry</option>
                  <option>Unit Reservation</option>
                  <option>Pricing Question</option>
                  <option>Business Storage</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-200 p-4 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-blue-900 text-white py-4 rounded-sm font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl active:scale-95">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Actual Map Integration */}
        <div className="mt-24 h-[450px] bg-gray-200 rounded-sm overflow-hidden relative shadow-lg border border-gray-100">
          <iframe
            src="https://maps.google.com/maps?q=5173%20AR%201%20Jonesboro%20Arkansas&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="American Mini-Storage Location"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
          {/* Overlay for "View on Google Maps" - only visible on hover if we want, but iframe is interactive */}
          <div className="absolute bottom-4 left-4 z-10">
            <a
              href="https://www.google.com/maps/search/?api=1&query=5173+AR+1+Jonesboro+Arkansas"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded-sm font-bold shadow-2xl hover:bg-accent transition-all text-sm flex items-center gap-2"
            >
              <MapPin size={16} /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
