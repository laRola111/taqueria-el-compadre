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
        "Carnitas", "Pastor", "Bistec", "Barbacoa",
        "Chicharrón", "Campechano", "Chorizo", "Birria",
        "Pollo Fajita", "Beef Fajita", "Picadillo", "Pollo Tinga"
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
      heading: "Desayunos Compadre",
      intro: "Que tus mañanas sean tan especial con tan solo probar unos rico tacos de desayuno ! Elige los ingrediente que más te gusten.",
      burritoTitle: "TACOS O Burritos",
      burritoSubtitle: "Tortilla  de  arina o maiz",
      ingredients: [
        "1. Huevo",
        "2. Jamón",
        "3. papa",
        "4. Queso",
        "5. Miga",
        "6. Salchicha",
        "7. Chorizo",
        "8. Tocino",
        "9. Nopal",
        "10. Frijoles",
        "11. sausage",
        "12. mexicana",
        "13. Vegetales"
      ],
      platesTitle: "BREAKFAST PLATES",
      plates: [
        {
          title: "1. plato de egg al gusto",
          desc: "A acompañados con papa frijoles. Tortilla Flour o corn"
        },
        {
          title: "2. Plato egg ranchero",
          desc: "Con 4 huevo estrellado y salsa Ranchera acompañado con frijoles y papa."
        }
      ],
      photoPlates: [
        {
          title: "Chilaquiles Rojos",
          desc: "Tortilla frita bañada en salsa roja, acompañada con frijoles, papa, queso fresco, cebolla y crema con huevo al gusto!",
          img: "/assets/chilaquiles-rojos.png"
        },
        {
          title: "Chilaquiles Verdes",
          desc: "Tortilla frita bañada en salsa verde, acompañada con frijoles, papa, queso fresco, cebolla y crema con huevo al gusto!",
          img: "/assets/Chilaquiles-verdes.png"
        },
        {
          title: "Plato de Omelette",
          desc: "Tortilla de huevos elaborada con huevo batido y cocinado con mantequilla. ¡Pídelo con vegetales o tus ingredientes favoritos!",
          img: "/assets/plato de Omelette bowl.png"
        },
        {
          title: "Migas",
          desc: "",
          img: "/assets/Migas.png"
        },
        {
          title: "Plato de Pancakes",
          desc: "Acompañados con 3 pancakes, con huevo revuelto y tocino.",
          img: "/assets/Plato de Pancakes.png"
        }
      ],
      bowlFootnote: "Puedes armar tu Bowl con los ingredientes que más te gusten de desayuno!",
    },
    menu: {
      sectionTitle: "Lunch & Dinner",
      mainTitle: "Nuestro Menú",
      meatTitle: "Opciones de Carne",
      items: {
        tacos:         { title: "Tacos Lunch", desc: "¡Deleita tu paladar con unos ricos tacos de lunch! Elige tu carne: Carnita, Pastor, Bistec, Barbacoa, Chicharrón, Campechano, Chorizo, Birria, Pollo fajita, Beef fajita, Picadillo o Pollo tinga. Tacos de carne con: cebolla, cilantro, limón. Tacos fajita con: queso, lechuga, tomate. ¡Porque un buen lunch no se le niega a nadie!" },
        bistec:        { title: "Platos de Lunch", desc: "¡Ricos platillos que te dejarán satisfecho! Carnes: pastor, bistec, barbacoa, carnitas, campechano, chicharrón, birria, pollo fajita, beef fajita, picadillo, pollo tinga, milanesa de pollo. Acompañado con su rica ensalada: lechuga, pico, aguacate, crema, arroz, frijol. Ensalada de nopalito, arroz, frijol. Solo carnita plato. Tortilla: harina / maíz." },
        burrito:       { title: "Burritos Lunch", desc: "Elige tu carne. Acompañados con: frijoles, arroz, lechuga, pico, aguacate, crema." },
        quesadillas:   { title: "Quesadilla Lunch", desc: "Tortilla grande de harina, dorada en el comal y partida en cuatro pedazos. ¡Puedes elegir tu carne al gusto! Pastor / Bistec / Barbacoa / Campechana / Beef fajita / Pollo fajita / Carnitas / Chicharrón / Vegetales / Queso Monterey. ¡Acompañada con su rica ensalada! Lechuga, pico, aguacate, crema." },
        sopes:         { title: "Sope Lunch", desc: "Elige tu carne. Acompañados con: frijoles, lechuga, pico, queso fresco." },
        tortas:        { title: "Tortas Lunch", desc: "De pan de telera con la carne de su elección. Acompañado con: frijoles, cebolla, cilantro, jalapeño, aguacate, queso, mayonesa. — Torta Milanesa: milanesa de pollo empanizado. — Tortas Fajitas y Más: res, pollo, jamón, salchicha, huevo estrellado, huevo al gusto; acompañado con: frijoles, lechuga, tomate, cebolla, jalapeño, aguacate, mayonesa, queso. — Torta Cubana: con milanesa de pollo, salchicha, jamón; acompañada con: frijol, lechuga, cebolla, tomate, jalapeño, aguacate, queso Monterey, mayonesa." },
        gorditas:      { title: "Quesadillas Pequeñas", desc: "Tú eliges tu tortilla: harina o maíz. ¡Con la carne de tu preferencia!" },
        pastor:        { title: "Torta Milanesa", desc: "Milanesa de pollo empanizado." },
        campechano:    { title: "Tortas Fajitas y Más", desc: "Res / Pollo / Jamón / Salchicha / Huevo estrellado / Huevo al gusto. Acompañado con: frijoles, lechuga, tomate, cebolla, jalapeño, aguacate, mayonesa, queso." },
        chile_relleno: { title: "Quesa-birria", desc: "Tortilla pequeña de maíz, bañada con consomé de birria. Con su cebolla, cilantro, limón." },
        fajitas:       { title: "Platillos Especiales del Día", desc: "1. Enchiladas de mole — Tres enchiladas bañadas en salsa de mole poblano, queso fresco, frijoles y arroz. De: picadillo / pollo tinga / queso fresco. | 2. Enchiladas en salsa verde — Tres enchiladas bañadas en salsa verde de tomatillo, queso fresco, frijoles y arroz. De: picadillo / pollo tinga / queso fresco. | 3. Chuletas de puerco en salsa — Dos chuletas con dos huevos estrellados al gusto, arroz y frijoles. | 4. Chiles poblanos rellenos — Chile frito capeado de huevo con salsa de tomate, jalapeño, cebolla y ajo, arroz y frijoles. De: picadillo / queso fresco / pollo tinga. Tortilla: harina o maíz. | 5. Costilla de puerco en salsa de tomatillo y nopales — Costilla de puerco en pedazos con nopales, arroz y frijoles. Tortilla: harina o maíz. | 6. Plato de mole poblano rojo — Piezas de pollo (muslo o pierna) con mole, arroz y tortillas hechas a mano. | 7. Sábado: Menudo de res — Panza y patita de res en caldo estilo Veracruz, con cebolla, cilantro, chile serrano, limón y tortillas hechas a mano." }
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
    bowls: {
      sectionTitle: "También en Desayunos",
      mainTitle: "Nuestros Bols",
      desc: "Puedes armar tu Bowl con los ingredientes que más te gusten de desayuno!",
      badge: "Desayuno",
      footnote: "*Puedes armar tu Bowl con los ingredientes que más te gusten de desayuno!",
      items: {
        bol1: { title: "6. Gary Bowl", desc: "Egg, sausage, chorizo, beans, cheese, bacon." },
        bol2: { title: "7. Kareem Bowl", desc: "Miga, bacon, cheese." },
        bol3: { title: "8. Huevo con chile Bowl", desc: "Salsa con egg, beans." },
        bol4: { title: "Arma tu Bowl", desc: "Puedes armar tu Bowl con los ingredientes que más te gusten de desayuno!" },
        bol5: { title: "Bowl Especial", desc: "Deliciosa combinación de ingredientes de desayuno al gusto." }
      }
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
        "Carnitas", "Pastor", "Bistec", "Barbacoa",
        "Chicharrón", "Campechano", "Chorizo", "Birria",
        "Chicken Fajita", "Beef Fajita", "Picadillo", "Pollo Tinga"
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
      heading: "Compadre Breakfast",
      intro: "Make your mornings special just by trying some delicious breakfast tacos! Choose the ingredients you like best.",
      burritoTitle: "TACOS OR Burritos",
      burritoSubtitle: "Flour or corn tortilla",
      ingredients: [
        "1. Egg",
        "2. Ham",
        "3. Potato",
        "4. Cheese",
        "5. Miga",
        "6. Sausage",
        "7. Chorizo",
        "8. Bacon",
        "9. Cactus",
        "10. Beans",
        "11. Sausage (American)",
        "12. Mexicana",
        "13. Vegetables"
      ],
      platesTitle: "BREAKFAST PLATES",
      plates: [
        {
          title: "1. Eggs Your Way Plate",
          desc: "Served with potatoes, beans, and tortillas (flour or corn)."
        },
        {
          title: "2. Huevos Rancheros Plate",
          desc: "With 4 sunny-side-up eggs and ranchera sauce. Served with beans and potatoes."
        }
      ],
      photoPlates: [
        {
          title: "Red Chilaquiles",
          desc: "Fried corn tortilla bathed in red salsa, served with beans, potatoes, fresh cheese, onion, sour cream, and eggs your way!",
          img: "/assets/chilaquiles-rojos.png"
        },
        {
          title: "Green Chilaquiles",
          desc: "Fried corn tortilla bathed in green salsa, served with beans, potatoes, fresh cheese, onion, sour cream, and eggs your way!",
          img: "/assets/Chilaquiles-verdes.png"
        },
        {
          title: "Omelette Plate",
          desc: "Egg omelet made with beaten eggs cooked in butter. Order it with veggies or your favorite ingredients!",
          img: "/assets/plato de Omelette bowl.png"
        },
        {
          title: "Migas",
          desc: "",
          img: "/assets/Migas.png"
        },
        {
          title: "Pancakes Plate",
          desc: "Served with 3 pancakes, scrambled eggs, and bacon.",
          img: "/assets/Plato de Pancakes.png"
        }
      ],
      bowlFootnote: "You can build your Bowl with any of your favorite breakfast ingredients!",
    },
    menu: {
      sectionTitle: "Lunch & Dinner",
      mainTitle: "Our Menu",
      meatTitle: "Meat Choices",
      items: {
        tacos:         { title: "Lunch Tacos", desc: "Delight your palate with delicious lunch tacos! Choose your meat: Carnita, Pastor, Bistec, Barbacoa, Chicharrón, Campechano, Chorizo, Birria, Chicken Fajita, Beef Fajita, Picadillo, or Pollo Tinga. Meat tacos with: onion, cilantro, lime. Fajita tacos with: cheese, lettuce, tomato. Because a good lunch is for everyone!" },
        bistec:        { title: "Lunch Plates", desc: "Delicious plates that will leave you satisfied! Meats: pastor, bistec, barbacoa, carnitas, campechano, chicharrón, birria, chicken fajita, beef fajita, picadillo, pollo tinga, breaded chicken milanesa. Served with a fresh salad: lettuce, pico, avocado, sour cream, rice, beans. Cactus salad, rice, beans. Carnita plate only. Tortilla: flour / corn." },
        burrito:       { title: "Lunch Burritos", desc: "Choose your meat. Served with: beans, rice, lettuce, pico, avocado, sour cream." },
        quesadillas:   { title: "Lunch Quesadilla", desc: "Large flour tortilla, golden on the comal and cut into four pieces. Choose your meat: pastor / bistec / barbacoa / campechana / beef fajita / chicken fajita / carnitas / chicharrón / vegetables / Monterey cheese. Served with a fresh salad: lettuce, pico, avocado, sour cream." },
        sopes:         { title: "Lunch Sope", desc: "Choose your meat. Served with: beans, lettuce, pico, fresh cheese." },
        tortas:        { title: "Lunch Tortas", desc: "Telera bread with your choice of meat. Served with: beans, onion, cilantro, jalapeño, avocado, cheese, mayonnaise. — Milanesa Torta: breaded chicken milanesa. — Fajita Tortas & More: beef, chicken, ham, sausage, fried egg, egg your way; served with: beans, lettuce, tomato, onion, jalapeño, avocado, mayonnaise, cheese. — Cuban Torta: with breaded chicken milanesa, sausage, ham; served with: beans, lettuce, onion, tomato, jalapeño, avocado, Monterey cheese, mayonnaise." },
        gorditas:      { title: "Small Quesadillas", desc: "You choose your tortilla: flour or corn. With the meat of your choice!" },
        pastor:        { title: "Milanesa Torta", desc: "Breaded chicken milanesa." },
        campechano:    { title: "Fajita Tortas & More", desc: "Beef / Chicken / Ham / Sausage / Fried egg / Egg your way. Served with: beans, lettuce, tomato, onion, jalapeño, avocado, mayonnaise, cheese." },
        chile_relleno: { title: "Quesa-birria", desc: "Small corn tortilla bathed in birria broth. With onion, cilantro, lime." },
        fajitas:       { title: "Daily Specials", desc: "1. Mole Enchiladas — Three enchiladas in poblano mole sauce, fresh cheese, beans and rice. With: picadillo / pollo tinga / fresh cheese. | 2. Green Salsa Enchiladas — Three enchiladas in tomatillo green salsa, fresh cheese, beans and rice. With: picadillo / pollo tinga / fresh cheese. | 3. Pork Chops in Salsa — Two pork chops with two fried eggs your way, rice and beans. | 4. Stuffed Poblano Peppers — Battered pepper in tomato salsa with jalapeño, onion and garlic, rice and beans. With: picadillo / fresh cheese / pollo tinga. Tortilla: flour or corn. | 5. Pork Ribs in Tomatillo & Cactus Salsa — Pork ribs with cactus, rice and beans. Tortilla: flour or corn. | 6. Red Mole Plate — Chicken pieces (thigh or drumstick) in red mole, rice and handmade tortillas. | 7. Saturday: Beef Menudo — Beef tripe and foot in Veracruz-style broth, with onion, cilantro, serrano pepper, lime and handmade tortillas." }
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
    bowls: {
      sectionTitle: "Also at Breakfast",
      mainTitle: "Our Bowls",
      desc: "You can build your Breakfast Bowl with any ingredients you like!",
      badge: "Breakfast",
      footnote: "*You can build your Breakfast Bowl with any ingredients you like!",
      items: {
        bol1: { title: "6. Gary Bowl", desc: "Egg, sausage, chorizo, beans, cheese, bacon." },
        bol2: { title: "7. Kareem Bowl", desc: "Miga, bacon, cheese." },
        bol3: { title: "8. Huevo con Chile Bowl", desc: "Salsa with egg and beans." },
        bol4: { title: "Build Your Own Bowl", desc: "Customize your breakfast bowl with your favorite breakfast ingredients." },
        bol5: { title: "Special Bowl", desc: "A delicious combination of breakfast ingredients to your liking." }
      }
    },
    footer: {
      brandDesc: "Authentic Mexican flavor in every bite. Fresh ingredients, family recipes, and the best atmosphere.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      rights: "Created by"
    }
  }
};