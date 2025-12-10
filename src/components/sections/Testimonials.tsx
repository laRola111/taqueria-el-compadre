"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // <--- Hook Bilingüe

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-[#f2cc65]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#2e1a10] font-black text-3xl md:text-4xl font-heading mb-4">
            {t.testimonials.title}
          </h2>
          <div className="w-24 h-2 bg-[#e73a1d] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-xl relative border-b-8 border-[#2e1a10]"
            >
              <Quote className="absolute top-6 right-6 text-[#f2cc65] w-10 h-10 opacity-50" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#e73a1d] text-[#e73a1d]" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic text-lg leading-snug">"{review.text}"</p>
              <p className="font-bold text-[#2e1a10] uppercase tracking-wide text-sm">- {review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}