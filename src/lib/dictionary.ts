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
        tacos:         { title: "Tacos", desc: "Clásicos y deliciosos. Tortilla de maíz o harina con tu carne preferida." },
        bistec:        { title: "Bistec a la Mexicana", desc: "Jugoso bistec salteado con tomates, cebolla y chiles serranos, servido con arroz y frijoles." },
        burrito:       { title: "Burritos", desc: "Tortilla de harina gigante, arroz, frijoles y carne al gusto." },
        quesadillas:   { title: "Quesadillas", desc: "Tortilla de harina doblada con mucho queso fundido y carne." },
        sopes:         { title: "Sopes", desc: "Base gruesa de maíz con bordes pellizcados, frijoles, lechuga y crema." },
        tortas:        { title: "Tortas", desc: "Pan telera crujiente con tu carne favorita, aguacate, tomate, crema y jalapeños." },
        gorditas:      { title: "Gorditas", desc: "Tortilla gruesa de maíz rellena con tu carne favorita, frijoles y queso." },
        pastor:        { title: "Pastor", desc: "Nuestra clásica carne de cerdo marinada con achiote y especias, cocinada al trompo." },
        campechano:    { title: "Campechano", desc: "La deliciosa combinación de bistec, chorizo y chicharrón en un solo plato." },
        chile_relleno: { title: "Chile Relleno", desc: "Chile poblano asado relleno de queso, capeado y bañado en salsa de tomate." },
        fajitas:       { title: "Fajitas de Pollo", desc: "Tiras de pollo salteadas con pimientos y cebolla, servidas bien calientes." }
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
        tacos:         { title: "Tacos", desc: "Classic and delicious. Corn or flour tortilla with your favorite meat." },
        bistec:        { title: "Steak a la Mexicana", desc: "Juicy steak sautéed with tomatoes, onions, and serrano peppers, served with rice and beans." },
        burrito:       { title: "Burritos", desc: "Giant flour tortilla, rice, beans, and meat of your choice." },
        quesadillas:   { title: "Quesadillas", desc: "Folded flour tortilla with lots of melted cheese and meat." },
        sopes:         { title: "Sopes", desc: "Thick corn base with pinched edges, beans, lettuce, and cream." },
        tortas:        { title: "Tortas", desc: "Crispy telera bread with your choice of meat, avocado, tomato, sour cream, and jalapeños." },
        gorditas:      { title: "Gorditas", desc: "Thick corn tortilla stuffed with your choice of meat, beans, and cheese." },
        pastor:        { title: "Pastor", desc: "Our classic pork marinated with achiote and spices, slow-roasted to perfection." },
        campechano:    { title: "Campechano", desc: "A delicious combination of steak, chorizo, and pork rinds in a single dish." },
        chile_relleno: { title: "Chile Relleno", desc: "Roasted poblano pepper stuffed with cheese, battered and topped with tomato sauce." },
        fajitas:       { title: "Chicken Fajitas", desc: "Tender chicken strips sautéed with bell peppers and onions, served sizzling hot." }
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