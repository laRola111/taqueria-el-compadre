"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const MEATS = [
  "Beef Fajita",
  "Chicken Fajita",
  "Steak",
  "Pastor",
  "Barbacoa",
  "Birria",
  "Carnitas",
  "Chicharrón",
  "Picadillo",
];

const CATEGORIES = [
  {
    id: "tacos",
    title: "Tacos",
    description: "Tortilla de maíz o harina con tu carne favorita.",
    price: "$25",
    colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    imageColor: "bg-orange-100",
    emoji: "🌮",
  },
  {
    id: "gorditas",
    title: "Gorditas",
    description: "Rellenas de guiso y queso, doraditas en comal.",
    price: "$35",
    colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    imageColor: "bg-red-100",
    emoji: "🥙",
  },
  {
    id: "plates",
    title: "Dinner Plates",
    description: "Platillo completo con arroz, frijoles y ensalada.",
    price: "$120",
    colSpan: "col-span-12 lg:col-span-4 row-span-2",
    imageColor: "bg-green-100",
    emoji: "🍽️",
  },
  {
    id: "tortas",
    title: "Tortas",
    description: "Bolillo crujiente con aguacate, frijoles y queso.",
    price: "$65",
    colSpan: "col-span-12 md:col-span-6",
    imageColor: "bg-yellow-100",
    emoji: "🥪",
  },
  {
    id: "quesadillas",
    title: "Quesadillas",
    description: "Queso fundido en tortilla gigante de harina.",
    price: "$45",
    colSpan: "col-span-12 md:col-span-6",
    imageColor: "bg-blue-100",
    emoji: "🧀",
  },
];

export function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold text-lg mb-2 uppercase tracking-wide">
            Comidas / Lunch & Dinner
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-text-main font-heading mb-6">
            Nuestro Menú
          </h3>

          {/* Meat Selection Marquee/List */}
          <div className="relative overflow-hidden py-4 bg-white shadow-sm border-y border-gray-100 max-w-4xl mx-auto rounded-xl">
            <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider font-bold">
              Carnes Disponibles
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {MEATS.map((meat, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-text-main rounded-full text-sm font-bold border border-primary/20"
                >
                  {meat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6 max-w-6xl mx-auto">
          {CATEGORIES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${item.colSpan} group relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col`}
            >
              {/* Visual Top/Side */}
              <div
                className={`h-40 ${item.imageColor} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500`}
              >
                {item.emoji}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-2xl font-bold text-text-main font-heading">
                    {item.title}
                  </h4>
                  <span className="bg-secondary text-white text-sm font-bold px-2 py-1 rounded-lg">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-500 mb-4 flex-1">{item.description}</p>
                <button className="w-full mt-auto py-2 rounded-lg bg-gray-50 text-gray-800 font-bold group-hover:bg-primary group-hover:text-text-main transition-colors flex items-center justify-center gap-2">
                  Ordenar <Star size={16} className="fill-current" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
