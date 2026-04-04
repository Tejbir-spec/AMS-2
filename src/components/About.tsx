import { motion } from "motion/react";
import { CheckCircle2, Users, Handshake, ShieldCheck } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Users className="text-accent" size={32} />,
      title: "Family Owned, and Operated",
      description: "A trusted local business serving the Jonesboro community for years.",
    },
    {
      icon: <Handshake className="text-accent" size={32} />,
      title: "Customer First",
      description: "Friendly on-site management ready to help you find the perfect fit.",
    },
    {
      icon: <ShieldCheck className="text-accent" size={32} />,
      title: "Secure & Safe",
      description: "Gated entry and 24-hour surveillance for your peace of mind.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container-custom">
        {/* New Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <img
            src="storefront.png"
            alt="American Mini-Storage Facility Entrance"
            className="rounded-sm shadow-2xl w-full h-[550px] object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src="storage-units.jpg"
                alt="Storage Units with Red Doors"
                className="rounded-sm shadow-lg w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <img
                src="chatgpt-image-4.png"
                height="400px"
                width="600px"
                alt="Gated Access"
                className="rounded-sm shadow-lg w-full h-48 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-8 space-y-4">
              <img
                src="moving-van.png"
                alt="Moving Van"
                className="rounded-sm shadow-lg w-full h-48 object-cover"
                referrerPolicy="no-referrer"
              />
              <img
                src="signing-contract.png"
                alt="Management Office"
                className="rounded-sm shadow-lg w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-accent"></span>
              About American Mini-Storage
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Your Trusted Partner in <br />
              <span className="text-accent">Arkansas Mini-Storage</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Established as a cornerstone of the local community, American Storage
              provides reliable, high-quality storage solutions at 5173 AR 1 Jonesboro, Arkansas.
              We understand that your belongings are more than just items—they're
              memories, business assets, and personal treasures.
            </p>

            <div className="space-y-6 mb-10">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-sm border border-gray-100 hover:border-accent/30 hover:bg-accent/5 transition-all group">
                  <div className="shrink-0 transform group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-1">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">15+</span>
                <span className="text-sm text-gray-500 uppercase font-bold tracking-wider">Years Experience</span>
              </div>
              <div className="w-[1px] h-12 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">100+</span>
                <span className="text-sm text-gray-500 uppercase font-bold tracking-wider">Units Available</span>
              </div>
              <div className="w-[1px] h-12 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">100%</span>
                <span className="text-sm text-gray-500 uppercase font-bold tracking-wider">Secure Facility</span>
              </div>
            </div>
            <p className="mt-8 text-gray-600 italic font-medium">
              Explore our facility and see why we’re the preferred choice for storage in Jonesboro.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
