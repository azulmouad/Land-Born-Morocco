"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "United Kingdom",
    rating: 5,
    text: "Omar made our trip to Morocco absolutely unforgettable. His knowledge of the local culture and hidden gems was incredible. We felt safe and welcomed everywhere we went.",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Canada",
    rating: 5,
    text: "The desert tour was the highlight of our year! Everything was perfectly organized, from the camel ride to the luxury camp. Highly recommend Land Born Morocco!",
  },
  {
    id: 3,
    name: "Emma & David",
    location: "Australia",
    rating: 5,
    text: "We were hesitant about booking a guide, but Omar was fantastic. He wasn't just a guide, he became a friend. The authentic meals we had with local families were priceless.",
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-sand font-semibold uppercase tracking-widest mb-2">Testimonials</h2>
        <h3 className="text-4xl md:text-5xl font-heading font-bold text-deep-blue mb-16">
          What Our Guests Say
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 text-sand/20 transform rotate-180" size={40} />
              
              <div className="flex justify-center mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-sand fill-current" />
                ))}
              </div>

              <p className="text-gray-600 mb-8 italic leading-relaxed">
                &quot;{review.text}&quot;
              </p>

              <div>
                <h4 className="font-bold text-deep-blue text-lg">{review.name}</h4>
                <p className="text-gray-400 text-sm">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
