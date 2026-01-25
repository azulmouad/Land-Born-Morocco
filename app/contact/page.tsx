"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="bg-cream min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero-3.png" // Using Atlas Mountains image for variety
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/50" />

        <div className="max-w-7xl mx-auto text-center relative z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-4 text-white"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            Start planning your dream Moroccan adventure today.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 px-4 md:px-12 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sand font-semibold uppercase tracking-widest mb-2 text-sm md:text-base">
                Contact Us
              </h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-deep-blue mb-6">
                Let's Chat
              </h3>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                Have questions about our tours? Want to customize your
                itinerary? Or just want to say hello? formatting your message
                below and we’ll get back to you shortly.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-md text-clay">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-blue text-lg">Phone</h4>
                    <p className="text-gray-600">+212 600 000 000</p>
                    <p className="text-gray-500 text-sm">
                      Mon-Fri from 9am to 6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-md text-clay">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-blue text-lg">Email</h4>
                    <p className="text-gray-600">omar@landbornmorocco.com</p>
                    <p className="text-gray-500 text-sm">Online support 24/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-md text-clay">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-blue text-lg">Office</h4>
                    <p className="text-gray-600">
                      123 Medina Avenue, Marrakech
                    </p>
                    <p className="text-gray-500 text-sm">Morocco, 40000</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-bold text-deep-blue text-lg mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-deep-blue text-white p-3 rounded-full hover:bg-clay transition-colors shadow-lg"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-deep-blue text-white p-3 rounded-full hover:bg-clay transition-colors shadow-lg"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-deep-blue text-white p-3 rounded-full hover:bg-clay transition-colors shadow-lg"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-clay focus:ring-2 focus:ring-clay/20 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-clay focus:ring-2 focus:ring-clay/20 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-clay focus:ring-2 focus:ring-clay/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-clay focus:ring-2 focus:ring-clay/20 outline-none transition-all text-gray-600"
                  >
                    <option>General Inquiry</option>
                    <option>Book a Tour</option>
                    <option>Custom Itinerary</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-clay focus:ring-2 focus:ring-clay/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your dream trip..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-deep-blue text-white rounded-xl font-bold hover:bg-clay transition-all shadow-lg flex items-center justify-center group"
                >
                  Send Message
                  <Send
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={18}
                  />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
