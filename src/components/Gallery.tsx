import { motion } from "motion/react";

export default function Gallery() {
  const images = [
    {
      url: "gated.png",
      title: "Secure Gated Entrance",
      category: "Security"
    },
    {
      url: "office.png",
      title: "Clean Storage Corridors",
      category: "Facility"
    },
    {
      url: "tarp.png",
      title: "Car Parking",
      category: "Outdoor"
    },
    {
      url: "climate.png",
      title: "Climate Controlled Units",
      category: "Climate"
    },
    {
      url: "caerma.png",
      title: "24/7 Surveillance Cameras",
      category: "Security"
    },
    {
      url: "drive.png",
      title: "Easy Drive-Up Access",
      category: "Convenience"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-accent font-bold uppercase tracking-widest text-sm mb-4">
            <span className="w-8 h-[2px] bg-accent"></span>
            Facility Gallery
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Take a Look Around
          </h2>
          <p className="text-lg text-gray-600">
            Explore our facility and see why we’re the preferred choice for storage in Jonesboro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-sm shadow-lg aspect-[4/3]"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-accent font-bold text-xs uppercase tracking-widest mb-1">{image.category}</span>
                <h4 className="text-white font-bold text-xl">{image.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
