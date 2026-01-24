"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is it safe to travel to Morocco?",
    answer: "Yes, Morocco is generally very safe for tourists. As a local guide, I ensure we stick to safe routes and trusted accommodations. Moroccan hospitality is legendary!",
  },
  {
    question: "What is included in the tour price?",
    answer: "Most tours include transport in a private air-conditioned vehicle, fuel, accommodations, breakfast and dinner (in the desert), and camel treks. Lunches and drinks are usually extra.",
  },
  {
    question: "Do I need a visa to visit Morocco?",
    answer: "Citizens from many countries (USA, UK, Canada, EU, Australia, etc.) do not need a visa for stays up to 90 days. Please check with your local Moroccan embassy for the latest requirements.",
  },
  {
    question: "Can you customize a tour for us?",
    answer: "Absolutely! All my tours can be tailored to your interests, schedule, and budget. Whether you want more hiking, more history, or just relaxation, we can make it happen.",
  },
  {
      question: "What should I wear?",
      answer: "Morocco is a conservative country. While it's liberal in big cities, it's respectful to dress modestly (covering shoulders and knees) in rural areas and small villages.",
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sand font-semibold uppercase tracking-widest mb-2">Good to Know</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-deep-blue">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden bg-cream/30">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-cream transition-colors"
              >
                <span className="text-lg font-semibold text-deep-blue">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-sand flex-shrink-0" />
                ) : (
                  <Plus className="text-deep-blue flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100/50">
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
