import { motion } from "motion/react";
import { Check, Info } from "lucide-react";

export default function Pricing() {
  const units = [
    {
      size: "5' x 10'",
      type: "Small Unit",
      price: "45",
      description: "Fits a walk-in closet or small bedroom.",
      idealFor: ["Boxes", "Small Furniture", "Seasonal Items"],
      isPopular: false,
    },
    {
      size: "10' x 10'",
      type: "Medium Unit",
      price: "69",
      description: "Fits a 1-2 bedroom apartment or office.",
      idealFor: ["Appliances", "Furniture", "Business Inventory"],
      isPopular: true,
    },
    {
      size: "10' x 20'",
      type: "Large Unit",
      price: "88",
      description: "Fits a 3-4 bedroom house or large vehicle.",
      idealFor: ["Full House Content", "Car Storage", "Large Equipment"],
      isPopular: false,
    },
    {
      size: "10' x 30'",
      type: "Car / Boat Storage",
      price: "125",
      description: "Spacious outdoor or covered storage.",
      idealFor: ["Cars", "Boats", "Trailers"],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-accent font-bold uppercase tracking-widest text-sm mb-4">
            <span className="w-8 h-[2px] bg-accent"></span>
            Unit Sizes & Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Find the Perfect Space
          </h2>
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-8 inline-block">
            <p className="text-accent font-bold flex items-center justify-center gap-2">
              <Check size={18} />
              Special Discount: First Responders, Teachers, & Clergy get 10% OFF monthly rates!
            </p>
          </div>
          <p className="text-lg text-gray-600">
            Choose from a variety of unit sizes to fit your needs and budget. 
            All units are clean, secure, and ready for move-in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {units.map((unit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-sm border-2 p-8 flex flex-col group transition-all hover:shadow-2xl ${
                unit.isPopular ? "border-accent shadow-xl scale-105 z-10" : "border-gray-100 hover:border-accent/30"
              }`}
            >
              {unit.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-primary mb-1">{unit.size}</h3>
                <p className="text-gray-500 font-semibold uppercase tracking-wider text-xs">{unit.type}</p>
              </div>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-primary">${unit.price}</span>
                <span className="text-gray-500 font-medium">/mo</span>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {unit.description}
              </p>
              <div className="space-y-3 mb-8 flex-grow">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Ideal For:</p>
                {unit.idealFor.map((item, iIndex) => (
                  <div key={iIndex} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check size={16} className="text-accent" />
                    {item}
                  </div>
                ))}
              </div>
              <button
                className={`w-full py-4 rounded-sm font-bold transition-all active:scale-95 ${
                  unit.isPopular
                    ? "bg-accent hover:bg-red-700 text-white shadow-lg"
                    : "bg-primary hover:bg-blue-900 text-white"
                }`}
              >
                Reserve Now
              </button>
              <div className="mt-4 flex items-center justify-center gap-1 text-xs text-gray-400">
                <Info size={12} />
                <span>No deposit required</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="mt-16 p-8 bg-neutral-light rounded-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-full">
              <Info className="text-accent" />
            </div>
            <p className="text-gray-600 max-w-xl">
              <span className="font-bold text-primary">Not sure what size you need?</span> Use our 
              storage calculator or call our on-site manager for a free consultation. 
              We'll help you find the most cost-effective solution.
            </p>
          </div>
          <a
            href="tel:8702751643"
            className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2"
          >
            Call (870) 275-1643
          </a>
        </div>
      </div>
    </section>
  );
}
