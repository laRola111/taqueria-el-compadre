"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const INGREDIENTS = [
  {
    id: "huevo",
    name: "Huevo",
    color: "bg-yellow-100 border-yellow-300 text-yellow-800",
  },
  {
    id: "tocino",
    name: "Tocino",
    color: "bg-red-100 border-red-300 text-red-800",
  },
  {
    id: "chorizo",
    name: "Chorizo",
    color: "bg-orange-100 border-orange-300 text-orange-800",
  },
  {
    id: "jamon",
    name: "Jamón",
    color: "bg-pink-100 border-pink-300 text-pink-800",
  },
  {
    id: "salchicha",
    name: "Salchicha",
    color: "bg-rose-100 border-rose-300 text-rose-800",
  },
  {
    id: "papa",
    name: "Papa",
    color: "bg-amber-100 border-amber-300 text-amber-800",
  },
  {
    id: "frijol",
    name: "Frijol",
    color: "bg-stone-200 border-stone-400 text-stone-800",
  },
  {
    id: "queso",
    name: "Queso",
    color: "bg-yellow-50 border-yellow-200 text-yellow-600",
  },
  {
    id: "nopales",
    name: "Nopales",
    color: "bg-green-100 border-green-300 text-green-800",
  },
];

export function BreakfastBuilder() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const toggleIngredient = (id: string) => {
    if (selectedIngredients.includes(id)) {
      setSelectedIngredients(selectedIngredients.filter((i) => i !== id));
    } else {
      if (selectedIngredients.length < 5) {
        setSelectedIngredients([...selectedIngredients, id]);
      }
    }
  };

  return (
    <section id="builder" className="py-24 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#f2cc65]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#e73a1d] font-bold text-lg mb-2 uppercase tracking-wide">
            Tu antojo, tu estilo
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#2e1a10] font-heading">
            Arma tu Desayuno
          </h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Elige tus ingredientes favoritos y crea la combinación perfecta. ¡Tú
            decides qué lleva tu taco o burrito!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Ingredients Selection */}
          <div>
            <h4 className="text-xl font-bold text-[#2e1a10] mb-6 flex items-center gap-2">
              <span className="bg-[#f2cc65] w-8 h-8 rounded-full flex items-center justify-center text-white text-sm">
                1
              </span>
              Selecciona tus ingredientes (Max 5)
            </h4>

            <div className="flex flex-wrap gap-3">
              {INGREDIENTS.map((ing) => {
                const isSelected = selectedIngredients.includes(ing.id);
                return (
                  <motion.button
                    key={ing.id}
                    onClick={() => toggleIngredient(ing.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "px-4 py-2 rounded-full border-2 font-medium transition-all flex items-center gap-2",
                      isSelected
                        ? `${ing.color} shadow-sm`
                        : "bg-white border-gray-200 text-gray-500 hover:border-[#f2cc65]"
                    )}
                  >
                    {isSelected ? <Check size={16} /> : <Plus size={16} />}
                    {ing.name}
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-100 text-sm text-yellow-800">
              <p>
                💡 <strong>Tip:</strong> Todos los desayunos incluyen tortilla
                de harina o maíz recién hecha.
              </p>
            </div>
          </div>

          {/* Visualization Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#f2cc65] rounded-3xl rotate-3 opacity-20 transform scale-95" />

            <motion.div
              className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
              layout
            >
              <div className="flex justify-between items-start mb-6 border-b border-gray-100 pb-4">
                <div>
                  <h4 className="text-2xl font-bold text-[#2e1a10] font-heading">
                    Tu Creación
                  </h4>
                  <p className="text-gray-500 text-sm">Listo para ordenar</p>
                </div>
                <div className="bg-[#e73a1d] text-white px-3 py-1 rounded-full text-xs font-bold">
                  Precio según ingredientes
                </div>
              </div>

              <div className="min-h-[200px] flex flex-col justify-center items-center p-6 bg-slate-50 rounded-xl mb-6 border-2 border-dashed border-gray-200">
                <AnimatePresence mode="popLayout">
                  {selectedIngredients.length === 0 ? (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-gray-400 text-center"
                    >
                      Selecciona ingredientes para ver tu taco mágico aquí...
                    </motion.p>
                  ) : (
                    <div className="flex flex-wrap justify-center gap-2">
                      {selectedIngredients.map((id) => {
                        const ing = INGREDIENTS.find((i) => i.id === id);
                        return (
                          <motion.div
                            key={id}
                            layoutId={id}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className={cn(
                              "px-4 py-2 rounded-lg font-bold text-sm shadow-sm",
                              ing?.color
                            )}
                          >
                            {ing?.name}
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </AnimatePresence>
              </div>

              <button
                disabled={selectedIngredients.length === 0}
                className="w-full bg-[#2e1a10] hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95"
              >
                {selectedIngredients.length === 0
                  ? "Elige ingredientes"
                  : "¡Lo quiero!"}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
