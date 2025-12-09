"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Carlos R.",
    text: "¡Los mejores tacos de desayuno en Austin! El sabor es auténtico y las tortillas de harina están increíbles.",
    stars: 5,
  },
  {
    name: "Sarah M.",
    text: "The green sauce is amazing. I come here every weekend for the barbacoa tacos. Highly recommended!",
    stars: 5,
  },
  {
    name: "Familia González",
    text: "El servicio es muy amable y rápido. Se siente como comer en casa de la abuela. ¡Los chilaquiles son top!",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-[#f2cc65]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#2e1a10] font-bold text-3xl md:text-4xl font-heading mb-4">
            Lo que dicen los Compadres
          </h2>
          <div className="w-24 h-1 bg-[#e73a1d] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg relative"
            >
              <Quote className="absolute top-4 right-4 text-[#f2cc65]/30 w-12 h-12" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#e73a1d] text-[#e73a1d]" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
              <p className="font-bold text-[#2e1a10]">- {review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}