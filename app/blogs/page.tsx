"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, Clock, Search, Tag, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

// Mock Blog Data
const BLOG_POSTS = [
  {
    id: 1,
    title: "10 Reasons Why You Need to Visit the Sahara Desert",
    slug: "reasons-to-visit-sahara",
    image: "/images/hero-1.png",
    excerpt:
      "The silence of the dunes, the star-filled luxury camps, and the hospitality of the Berber people make it a must-do.",
    date: "Oct 15, 2025",
    author: "Omar",
    category: "Travel Tips",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "A Foodie’s Guide to Marrakech Street Food",
    slug: "marrakech-food-guide",
    image: "/images/blog-1.png", // Assuming existence or reusing placeholders
    excerpt:
      "From tagine to snails, discover the best flavors in Jemaa el-Fnaa square and hidden alleyways.",
    date: "Sep 28, 2025",
    author: "Fatima",
    category: "Food & Culture",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Hidden Gems in the Old Medina of Fez",
    slug: "hidden-gems-fez",
    image: "/images/hero-2.png",
    excerpt:
      "Get lost in the world's largest car-free urban area. Discover ancient tanneries, madrasas, and artisan workshops.",
    date: "Sep 10, 2025",
    author: "Omar",
    category: "City Guides",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Surfing in Taghazout: A Complete Guide",
    slug: "surfing-taghazout",
    image: "/images/hero-3.png",
    excerpt:
      "The best spots to catch waves, where to stay, and the vibe of this laid-back fishing village.",
    date: "Aug 22, 2025",
    author: "Hassan",
    category: "Adventure",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Photography Tips for Chefchaouen",
    slug: "photography-chefchaouen",
    image: "/images/hero-2.png",
    excerpt:
      "How to capture the mesmerizing blue hues of Morocco’s Blue Pearl without the crowds.",
    date: "Jul 15, 2025",
    author: "Sarah",
    category: "Photography",
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "Hiking Mount Toubkal: What to Pack",
    slug: "hiking-toubkal-packing",
    image: "/images/hero-3.png",
    excerpt:
      "Essential gear list for conquering the highest peak in North Africa safely and comfortably.",
    date: "Jun 05, 2025",
    author: "Omar",
    category: "Adventure",
    readTime: "10 min read",
  },
];

const CATEGORIES = [
  "All",
  "Travel Tips",
  "Food & Culture",
  "City Guides",
  "Adventure",
  "Photography",
];

export default function BlogsPage() {
  return (
    <main className="bg-cream min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <PageHeader
        image="/images/hero-2.png"
        title="Stories from Morocco"
        subtitle="Travel tips, cultural insights, and hidden gems currated by locals."
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 px-4 md:px-12 grow">
        <div className="max-w-7xl mx-auto">
          {/* Search & Categories Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {CATEGORIES.map((cat, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${idx === 0 ? "bg-deep-blue text-white shadow-md" : "bg-white text-gray-600 hover:text-clay hover:bg-white/80"}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-transparent focus:border-clay focus:ring-2 focus:ring-clay/10 outline-none transition-all placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-clay text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col grow">
                  <div className="flex items-center text-xs text-gray-400 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1 text-sand" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1 text-sand" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-deep-blue mb-3 font-heading leading-tight group-hover:text-clay transition-colors">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3 grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                    <div className="flex items-center text-sm font-medium text-deep-blue">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-2 text-gray-400">
                        <User size={16} />
                      </div>
                      {post.author}
                    </div>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="text-clay text-sm font-semibold flex items-center group-hover:underline"
                    >
                      Read Post{" "}
                      <ArrowRight
                        size={16}
                        className="ml-1 group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination / Load More */}
          <div className="mt-16 text-center">
            <button className="px-8 py-3 bg-white border border-gray-200 text-gray-600 font-medium rounded-full hover:bg-gray-50 transition-colors shadow-sm">
              Load More Stories
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
