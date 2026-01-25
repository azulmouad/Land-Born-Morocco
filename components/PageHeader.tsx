"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeaderProps {
  image: string;
  title: string;
  subtitle: string;
}

export default function PageHeader({
  image,
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
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
        <Image src={image} alt={title} fill className="object-cover" priority />
      </motion.div>
      <div className="absolute inset-0 bg-black/50" />

      <div className="max-w-7xl mx-auto text-center relative z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold mb-3 md:mb-4 text-white"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
