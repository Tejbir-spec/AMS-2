import { motion } from "motion/react";
import { Star, Quote, User } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Local Resident",
      content: "American Storage made my move so much easier. The staff was incredibly helpful, and the facility is spotless and secure. I highly recommend them!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "Michael Davis",
      role: "Business Owner",
      content: "We've been using their business storage for over a year now. The 24/7 access is a game-changer for our inventory management. Great service!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=michael"
    },
    {
      name: "Emily Wilson",
      role: "Car Owner",
      content: "Finding a safe place for our car was a priority. The outdoor storage here is spacious and the gated access gives us peace of mind. Excellent experience.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=emily"
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-accent font-bold uppercase tracking-widest text-sm mb-4">
            <span className="w-8 h-[2px] bg-accent"></span>
            Customer Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-300">
            We're proud to serve the Arkansas community and provide 
            storage solutions that our customers can trust.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm relative group hover:bg-white/10 transition-all"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote size={48} className="text-accent" />
              </div>
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 flex items-center justify-center rounded-full overflow-hidden border-2 border-accent/30">
                  {testimonial.avatar ? (
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  ) : (
                    <User className="text-accent" size={24} />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2 bg-white text-primary px-6 py-2 rounded-full font-bold shadow-lg">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
            <span>4.9 / 5.0 on Google Reviews</span>
          </div>
          <p className="text-sm text-gray-400">Based on 150+ verified customer reviews</p>
        </div>
      </div>
    </section>
  );
}
