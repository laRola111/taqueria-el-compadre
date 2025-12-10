// src/lib/dictionary.ts

export type Language = 'es' | 'en';

export const dictionary = {
  es: {
    navbar: {
      home: "Inicio",
      menu: "Menú",
      breakfast: "Desayunos",
      location: "Ubicación",
      cta: "Pedir Ahora",
    },
    hero: {
      subtitle: "El Sabor que se te antoja",
      desc: "Auténtica cocina mexicana con ingredientes frescos y el sazón de casa. ¡Ven y prueba la diferencia!",
      cta: "Ver Menú",
    },
    marquee: {
      meats: [
        "Pastor", "Bistec", "Fajita de Res", "Fajita de Pollo", 
        "Barbacoa", "Birria", "Carnitas", "Chicharrón", 
        "Picadillo", "Campechanos", "Nopales"
      ]
    },
    about: {
      title: "Auténtico Sabor Casero",
      heading: "Cocinamos con el Corazón",
      text: "En El Compadre Manzano, no servimos 'comida rápida', servimos comida fresca lo más rápido posible. Cada taco, gordita y platillo se prepara al momento con recetas de familia.",
      badge: "100% FAMILIAR",
      cards: ["Tortillas a Mano", "Salsas Caseras"]
    },
    breakfast: {
      title: "Desayunos",
      heading: "Empieza el Día con Sabor",
      burritoTitle: "Tacos & Burritos",
      burritoDesc: "Tú decides qué lleva. Tortillas de harina calientitas hechas aquí mismo.",
      chilaquilesTitle: "Chilaquiles Rojos",
      chilaquilesDesc: "Totopos crujientes bañados en nuestra salsa roja especial (no pica mucho, solo da sabor).",
      ingredients: [
        "Huevos", "Tocino", "Chorizo", "Jamón",
        "Salchicha", "Papas", "Frijoles",
        "Queso", "Nopales"
      ],
      options: ["Con Huevos al Gusto", "Frijoles Refritos & Queso", "Opción con Carne Asada"]
    },
    menu: {
      sectionTitle: "Lunch & Dinner",
      mainTitle: "Nuestro Menú",
      meatTitle: "Opciones de Carne",
      items: {
        tacos: { title: "Tacos", desc: "Clásicos y deliciosos. Tortilla de maíz o harina con tu carne preferida." },
        gorditas: { title: "Gorditas", desc: "Masa de maíz doradita rellena de guiso y queso derretido." },
        plates: { title: "Dinner Plates", desc: "¡Para el hambre grande! Tu carne favorita servida con arroz y frijoles." },
        tortas: { title: "Tortas", desc: "Bolillo crujiente, mayonesa, aguacate, frijoles y carne al gusto." },
        burrito: { title: "Burritos", desc: "Tortilla de harina gigante, arroz, frijoles y carne." },
        sopes: { title: "Sopes", desc: "Base gruesa de maíz con bordes pellizcados, frijoles, lechuga y crema." },
        quesadillas: { title: "Quesadillas", desc: "Tortilla de harina doblada con mucho queso fundido." },
        large: { title: "Quesadilla Grande", desc: "Doble porción, doble sabor. La favorita para compartir." },
      }
    },
    location: {
      pretitle: "Visítanos",
      title: "Tu Mesa te Espera",
      addressTitle: "Dirección",
      hoursTitle: "Horario",
      hoursText: "Lun - Dom: 7:00 AM - 10:00 PM"
    },
    testimonials: {
      title: "Lo que dicen los Compadres",
      reviews: [
        { name: "María G.", text: "La salsa verde es increíble. Vengo cada fin de semana por mis tacos de barbacoa." },
        { name: "John D.", text: "¡Sabor auténtico! Las tortillas están hechas a mano y realmente se nota la diferencia." },
        { name: "Roberto S.", text: "El servicio es muy rápido y amable. Los mejores chilaquiles de la zona sin duda." }
      ]
    },
    footer: {
      brandDesc: "El auténtico sabor mexicano en cada mordida. Ingredientes frescos, recetas de familia y el mejor ambiente.",
      navTitle: "Navegación",
      contactTitle: "Contacto",
      rights: "Desarrollado por"
    },
  },
  en: {
    navbar: {
      home: "Home",
      menu: "Menu",
      breakfast: "Breakfast",
      location: "Location",
      cta: "Order Now",
    },
    hero: {
      subtitle: "The Flavor You Crave",
      desc: "Authentic Mexican cuisine with fresh ingredients and homemade seasoning. Come and taste the difference!",
      cta: "View Menu",
    },
    marquee: {
      meats: [
        "Marinated Pork", "Steak", "Beef Fajita", "Chicken Fajita", 
        "Barbacoa", "Birria", "Carnitas", "Pork Rinds", 
        "Ground Beef", "Campechanos", "Cactus"
      ]
    },
    about: {
      title: "Authentic Homemade Flavor",
      heading: "Cooking with Heart",
      text: "At El Compadre Manzano, we don't serve 'fast food', we serve fresh food as fast as possible. Every taco, gordita, and plate is made fresh to order with family recipes.",
      badge: "FAMILY OWNED",
      cards: ["Handmade Tortillas", "Homemade Salsas"]
    },
    breakfast: {
      title: "Breakfast",
      heading: "Start Your Day Right",
      burritoTitle: "Build Your Own",
      burritoDesc: "You decide what goes in. Warm flour tortillas made fresh right here.",
      chilaquilesTitle: "Red Chilaquiles",
      chilaquilesDesc: "Crispy tortilla chips bathed in our special red sauce (flavorful, not too spicy).",
      ingredients: [
        "Eggs", "Bacon", "Chorizo", "Ham",
        "Sausage", "Potatoes", "Beans",
        "Cheese", "Cactus"
      ],
      options: ["Eggs Your Way", "Refried Beans & Cheese", "Carne Asada Option"]
    },
    menu: {
      sectionTitle: "Lunch & Dinner",
      mainTitle: "Our Menu",
      meatTitle: "Meat Choices",
      items: {
        tacos: { title: "Tacos", desc: "Classic and delicious. Corn or flour tortilla with your favorite meat." },
        gorditas: { title: "Gorditas", desc: "Golden fried corn dough stuffed with stew and melted cheese." },
        plates: { title: "Dinner Plates", desc: "For big appetites! Your favorite meat served with rice and beans." },
        tortas: { title: "Tortas", desc: "Crispy bread, mayo, avocado, beans, and meat of your choice." },
        burrito: { title: "Burritos", desc: "Giant flour tortilla, rice, beans, and meat." },
        sopes: { title: "Sopes", desc: "Thick corn base with pinched edges, beans, lettuce, and cream." },
        quesadillas: { title: "Quesadillas", desc: "Folded flour tortilla with lots of melted cheese." },
        large: { title: "Large Quesadilla", desc: "Double portion, double flavor. Favorite for sharing." },
      }
    },
    location: {
      pretitle: "Visit Us",
      title: "Your Table Awaits",
      addressTitle: "Address",
      hoursTitle: "Hours",
      hoursText: "Mon - Sun: 7:00 AM - 10:00 PM"
    },
    testimonials: {
      title: "What our Compadres say",
      reviews: [
        { name: "Maria G.", text: "The green sauce is amazing. I come here every weekend for the barbacoa tacos." },
        { name: "John D.", text: "Authentic flavor! The tortillas are handmade and you can really taste the difference." },
        { name: "Robert S.", text: "Service is fast and friendly. Best chilaquiles in the area without a doubt." }
      ]
    },
    footer: {
      brandDesc: "Authentic Mexican flavor in every bite. Fresh ingredients, family recipes, and the best atmosphere.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      rights: "Created by"
    }
  }
};