import { motion } from "motion/react";
import { Home, Briefcase, Truck, Ship, Car, Box } from "lucide-react";

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
      </div>
    </section>
  );
}
