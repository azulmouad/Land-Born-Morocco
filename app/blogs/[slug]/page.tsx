"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/data/blogs";

export default function BlogDetailsPage() {
  const params = useParams();
  const slug = params.slug;

  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!post) {
    return notFound();
  }

  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-clay z-50 origin-left"
        style={{ scaleX }}
      />

      <article className="grow pb-16">
        {/* Full Screen Hero Section */}
        <div className="relative w-full h-[75vh] min-h-[600px] mb-16">
          <div className="absolute inset-0 bg-gray-900 z-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover opacity-90"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="max-w-5xl mx-auto px-4 text-center mt-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center justify-center gap-3 mb-8">
                  <span className="px-5 py-2 bg-white/20 backdrop-blur-md text-white border border-white/20 text-xs font-bold uppercase tracking-widest rounded-full">
                    {post.category}
                  </span>
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                  <span className="text-white/90 text-sm font-medium flex items-center gap-2">
                    <Clock size={16} />
                    {post.readTime}
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-10 leading-[1.1] drop-shadow-lg max-w-4xl mx-auto">
                  {post.title}
                </h1>

                <div className="inline-flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-white/90 border-t border-white/20 pt-8 mx-auto min-w-[300px]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <User size={20} className="text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider mb-0.5">
                        Written by
                      </p>
                      <p className="font-semibold text-lg leading-none">
                        {post.author}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block w-px h-10 bg-white/20" />

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <Calendar size={20} className="text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider mb-0.5">
                        Published on
                      </p>
                      <p className="font-semibold text-lg leading-none">
                        {post.date}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sidebar - Sticky Share */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="sticky top-32 flex flex-col items-center gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                Share
              </p>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-deep-blue hover:text-white hover:border-deep-blue transition-all">
                <Facebook size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all">
                <Twitter size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all">
                <Linkedin size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-clay hover:text-white hover:border-clay transition-all">
                <Share2 size={18} />
              </button>
            </div>
          </div>

          {/* Main Article Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg prose-clay max-w-none text-gray-700 leading-relaxed font-sans first-letter:text-5xl first-letter:font-bold first-letter:text-clay first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]"
            >
              {post.content}
            </motion.div>

            {/* Mobile Share (Visible only on mobile/tablet) */}
            <div className="lg:hidden mt-12 pt-8 border-t border-gray-100">
              <p className="text-sm font-bold text-deep-blue mb-4">
                Share this story
              </p>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-deep-blue">
                  <Facebook size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-deep-blue">
                  <Twitter size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-deep-blue">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Spacer or Author/Ad (Empty for now to center focus) */}
          <div className="lg:col-span-2"></div>
        </div>
      </article>

      {/* Related Posts Section */}
      <section className="bg-cream py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-heading font-bold text-deep-blue">
              You Might Also Like
            </h2>
            <Link
              href="/blogs"
              className="hidden md:flex items-center text-clay font-semibold hover:translate-x-1 transition-transform"
            >
              View all stories <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0 snap-x snap-mandatory scrollbar-hide">
            {relatedPosts.map((related, idx) => (
              <Link
                key={related.id}
                href={`/blogs/${related.slug}`}
                className="group shrink-0 w-[85%] md:w-auto snap-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  </div>

                  <div className="flex items-center text-sm text-gray-400 mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {related.date}
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      {related.author}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-deep-blue mb-3 font-heading leading-tight group-hover:text-clay transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {related.excerpt}
                  </p>

                  <div className="flex items-center text-clay font-semibold group-hover:underline">
                    Read More{" "}
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-clay font-semibold"
            >
              View all stories <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
