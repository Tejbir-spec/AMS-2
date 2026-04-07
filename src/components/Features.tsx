import { motion } from "motion/react";
import { Shield, Clock, CreditCard, UserCheck, Key, Map } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Shield size={32} className="text-white" />,
      title: "Secure Gated Access",
      description: "Only authorized tenants can enter the facility with their unique code.",
    },
    {
      icon: <Clock size={32} className="text-white" />,
      title: "24/7 Access",
      description: "Access your belongings whenever you need them, day or night.",
    },
    {
      icon: <CreditCard size={32} className="text-white" />,
      title: "Convenient Payment Options",
      description: "Set up automatic payment, pay over the phone, or pay in person during business hours.",
    },
    {
      icon: <UserCheck size={32} className="text-white" />,
      title: "On-Site Management",
      description: "Our friendly staff is here to assist you with all your storage needs.",
    },
    {
      icon: <Key size={32} className="text-white" />,
      title: "Durable Metal Units",
      description: "Our units are built to last and protect your items from the elements.",
    },
    {
      icon: <Map size={32} className="text-white" />,
      title: "Convenient Location",
      description: "Located at 5173 AR 1 Jonesboro, Arkansas for easy access from all surrounding areas.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-white/10 h-full"></div>
          ))}
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-4 py-1 rounded-full text-accent font-semibold text-sm mb-6">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium Features for <br />
            <span className="text-accent">Complete Peace of Mind</span>
          </h2>
          <p className="text-lg text-gray-300">
            We've invested in the best security and convenience features 
            to ensure your storage experience is safe, simple, and secure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 group"
            >
              <div className="shrink-0">
                <div className="w-16 h-16 bg-accent flex items-center justify-center rounded-sm transform group-hover:rotate-6 transition-transform shadow-lg">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-gray-300 mb-4">
              Reserve your unit over the phone today and receive your first month at a special rate! 
              No credit card required to secure your unit!
            </p>
            <div className="inline-flex items-center gap-2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              10% OFF for First Responders, Teachers, & Clergy
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#pricing"
              className="bg-accent hover:bg-red-700 text-white px-10 py-4 rounded-sm font-bold text-lg transition-all shadow-xl hover:shadow-2xl active:scale-95 text-center"
            >
              View Unit Sizes
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-primary px-10 py-4 rounded-sm font-bold text-lg transition-all active:scale-95 text-center"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
