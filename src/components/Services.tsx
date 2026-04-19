import { motion } from "motion/react";
import { Home, Briefcase, Truck, Box, CreditCard, Phone, Clock } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Home size={40} className="text-accent" />,
      title: "Personal Storage",
      description: "Perfect for moving, decluttering, or seasonal items. Various indoor unit sizes available.",
      features: ["Climate Controlled", "24/7 Access", "Month-to-Month"],
      image: "chatgpt-image-3.png",
    },
    {
      icon: <Briefcase size={40} className="text-accent" />,
      title: "Business Storage",
      description: "Secure space for inventory, documents, or equipment. Flexible terms for growing businesses.",
      features: ["Deliveries Accepted", "Large Units", "Gated Security"],
      image: "chatgpt-image-2.png",
    },
    {
      icon: <Truck size={40} className="text-accent" />,
      title: "Car and Boat Storage",
      description: "Spacious outdoor and covered options for cars, trucks, trailers, and boats.",
      features: ["Wide Driveways", "Convenient Access", "Secure Perimeter"],
      image: "chatgpt-image-1.png",
    },
  ];

  return (
    <section id="services" className="py-24 bg-neutral-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-accent font-bold uppercase tracking-widest text-sm mb-4">
            <span className="w-8 h-[2px] bg-accent"></span>
            Our Storage Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Storage That Fits Your Life
          </h2>
          <p className="text-lg text-gray-600">
            Whether you're moving across town or need a safe place for your
            business inventory, we have the space you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-sm shadow-lg overflow-hidden flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors"></div>
              </div>
              <div className="p-8 flex-grow">
                <div className="mb-6 p-3 bg-accent/10 w-fit rounded-sm group-hover:bg-accent group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <Box size={14} className="text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <a
                  href="#pricing"
                  className="block text-center border-2 border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-sm font-bold transition-all"
                >
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Convenient Payment Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-sm shadow-lg p-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="p-3 bg-accent/10 rounded-sm shrink-0">
              <CreditCard size={36} className="text-accent" />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-primary mb-3">Convenient Payment Options</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Clock size={16} className="text-accent shrink-0" />
                  Set up automatic payment
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Phone size={16} className="text-accent shrink-0" />
                  Pay over the phone
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Box size={16} className="text-accent shrink-0" />
                  Pay in person during business hours
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ready to Get Started CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-primary rounded-sm p-10 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Reserve Your Unit Over the Phone Today!
          </h3>
          <p className="text-white/80 text-lg mb-6 max-w-xl mx-auto">
            Receive your first month at a special rate! No credit card required to secure your unit.
          </p>
          <a
            href="tel:8702751643"
            className="inline-block bg-accent hover:bg-red-700 text-white px-10 py-4 rounded-sm font-bold text-lg transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            Call (870) 275-1643
          </a>
        </motion.div>
      </div>
    </section>
  );
}
