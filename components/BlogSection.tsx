"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";

const videoBlogs = [
  {
    id: 1,
    title: "How to Prepare for a Desert Trek",
    image: "/images/hero-1.png", // Reuse desert image
    excerpt: "Everything you need to know about packing and preparing for your Sahara adventure.",
    date: "Oct 12, 2025",
    author: "Omar",
  },
  {
    id: 2,
    title: "The Magic of Moroccan Mint Tea",
    image: "/images/blog-1.png", // New tea image
    excerpt: "Discover the tradition and culture behind Morocco's famous hospitality drink.",
    date: "Sep 28, 2025",
    author: "Fatima",
  },
  {
    id: 3,
    title: "Hidden Gems in Fez Medina",
    image: "/images/hero-2.png", // Reuse city image
    excerpt: "Get lost in the world's largest car-free urban area and find the best spots.",
    date: "Sep 15, 2025",
    author: "Omar",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-sand font-semibold uppercase tracking-widest mb-2 text-sm md:text-base">Travel Journal</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-deep-blue">
            Latest Stories
          </h3>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0 snap-x snap-mandatory scrollbar-hide">
          {videoBlogs.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[85%] md:w-auto snap-center group cursor-pointer"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>

              <div className="flex items-center text-sm text-gray-400 mb-3 space-x-4">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User size={14} className="mr-1" />
                  {post.author}
                </div>
              </div>

              <h4 className="text-xl font-bold text-deep-blue mb-3 font-heading group-hover:text-clay transition-colors">
                {post.title}
              </h4>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <button className="flex items-center text-clay font-semibold group-hover:underline">
                Read More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
