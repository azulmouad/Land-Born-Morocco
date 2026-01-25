"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 relative"
        >
          <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/omar-guide.png" // We will put the generated image here
              alt="Omar - Tour Guide"
              fill
              className="object-cover"
            />
          </div>
          {/* Decorative Pattern / Badge */}
          <div className="absolute -bottom-6 -right-6 bg-sand p-6 rounded-2xl shadow-xl z-10 text-white max-w-[200px]">
            <p className="font-heading font-bold text-3xl mb-1">10+</p>
            <p className="text-sm font-medium opacity-90">
              Years of Experience Guiding in Morocco
            </p>
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-sand font-semibold uppercase tracking-widest mb-2 text-sm md:text-base">
            Meet Your Guide
          </h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-deep-blue mb-4 md:mb-6">
            Hi, I&apos;m Omar
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
            I was born in the heart of the Sahara and raised with the stories of
            these lands. My passion is to show you the real Morocco—not just the
            famous sights, but the hidden gems, the authentic flavors, and the
            warm hospitality of our people.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
            Whether you want to sleep under the stars in the desert, explore the
            ancient medinas, or hike the Atlas Mountains, I will create a
            journey you will never forget.
          </p>

          <div className="space-y-4 mb-10">
            {[
              "Certified Professional Guide",
              "Fluent in English, French & Amazing Stories",
              "Authentic Local Experiences",
              "Comfortable & Safe Transport",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center text-gray-700 font-medium"
              >
                <CheckCircle2 className="text-clay mr-3" size={20} />
                {item}
              </div>
            ))}
          </div>

          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-deep-blue text-white rounded-full font-semibold hover:bg-clay transition-all shadow-lg"
          >
            Plan My Trip with Omar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
