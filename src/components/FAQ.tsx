import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What items can I store in my unit?",
      answer: "You can store most household items, business inventory, and vehicles. However, we strictly prohibit the storage of hazardous materials, explosives, flammable liquids, perishable food items, and illegal goods.",
    },
    {
      question: "Do I need to sign a long-term contract?",
      answer: "No! We offer flexible month-to-month rental agreements. You can rent for as short as one month or as long as you need. Just give us a 10-day notice before you move out.",
    },
    {
      question: "How do I access my storage unit?",
      answer: "Our facility features secure gated access. Once you rent a unit, you'll receive a unique gate code that allows you to enter the facility 24 hours a day, 7 days a week.",
    },
    {
      question: "What security measures do you have in place?",
      answer: "We take security seriously. Our facility is fully fenced and gated, equipped with 24-hour video surveillance, well-lit driveways, and on-site management during office hours.",
    },
    {
      question: "How do I pay my rent?",
      answer: "We make payments easy! You can pay online through our secure portal, set up automatic monthly payments, or pay in person at our office during business hours.",
    },
    {
      question: "Do you offer climate-controlled units?",
      answer: "Yes, we have a selection of indoor climate-controlled units that maintain a consistent temperature and humidity level, perfect for sensitive items like electronics, antiques, and documents.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-accent font-bold uppercase tracking-widest text-sm mb-4">
            <span className="w-8 h-[2px] bg-accent"></span>
            Common Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our storage solutions. 
            Can't find the answer you're looking for? Contact us!
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-sm transition-all overflow-hidden ${
                openIndex === index ? "border-accent bg-accent/5 shadow-lg" : "border-gray-100 hover:border-accent/30"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className={openIndex === index ? "text-accent" : "text-gray-400"} size={24} />
                  <span className={`text-lg font-bold ${openIndex === index ? "text-primary" : "text-gray-700"}`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                  {openIndex === index ? <Minus className="text-accent" /> : <Plus className="text-gray-400" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed ml-10">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
