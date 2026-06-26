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
      burritoSubtitle: "Tortilla de arina o maiz",
      ingredients: [
        "1. Huevo",
        "2. Jamón",
        "3. Papa",
        "4. Queso",
        "5. Miga",
        "6. Salchicha",
        "7. Chorizo",
        "8. Tocino",
        "9. Nopal",
        "10. Frijoles",
        "11. Sausage",
        "12. Mexicana",
        "13. Vegetales"
      ],
      platesTitle: "BREAKFAST PLATES",
      plates: [
        {
          title: "1. Chilaquiles Rojos o verdes",
          desc: "Tortilla frita, bañada en salsa. Acompañados con frijoles y papa, queso fresco, cebolla y crema con Huevo al gusto!"
        },
        {
          title: "2. Plato de egg al gusto",
          desc: "Acompañados con papa, frijoles y tortilla (Flour o corn)."
        },
        {
          title: "3. Plato egg ranchero",
          desc: "Con 4 huevo estrellado y salsa ranchera. Acompañado con frijoles y papa."
        },
        {
          title: "4. Plato de Pancakes",
          desc: "Acompañados con 3 pancakes, con egg revuelto y tocino."
        },
        {
          title: "5. Plato de Omelette",
          desc: "Tortilla de huevos elaborada con huevo batido y cocinado con mantequilla. Puedes pedirlo con vegetales o con los ingredientes que más te guste! Jamón, cheese, tocino, espinaca, champiñones y más!"
        }
      ],
      photo1: "Desayuno del Día",
      photo2: "Huevos al Gusto",
      photo3: "Especialidad de la Casa",
      photo4: "Más Opciones"
    },
    menu: {
      sectionTitle: "Lunch & Dinner",
      mainTitle: "Nuestro Menú",
      meatTitle: "Opciones de Carne",
      items: {
        tacos:       { title: "Tacos", desc: "Clásicos y deliciosos. Tortilla de maíz o harina con tu carne preferida." },
        plates:      { title: "Plato Especial", desc: "¡Para el hambre grande! Tu carne favorita servida con arroz y frijoles." },
        food4:       { title: "Platillo del Día", desc: "Porción generosa con los ingredientes más frescos del día." },
        food6:       { title: "Especialidad", desc: "Una combinación única de sabores que solo encontrarás aquí." },
        food8:       { title: "Antojito del Chef", desc: "La elección favorita de nuestra cocina. Prepárate para sorprenderte." },
        burrito:     { title: "Burritos", desc: "Tortilla de harina gigante, arroz, frijoles y carne al gusto." },
        sopes:       { title: "Sopes", desc: "Base gruesa de maíz con bordes pellizcados, frijoles, lechuga y crema." },
        quesadillas: { title: "Quesadillas", desc: "Tortilla de harina doblada con mucho queso fundido y carne." },
        food9:       { title: "Combo Especial", desc: "La elección perfecta para compartir. Abundante y lleno de sabor." },
        food11:      { title: "Platillo Familiar", desc: "Ideal para toda la familia. Porciones grandes y sabor auténtico." },
        food12:      { title: "Delicia de la Casa", desc: "Preparado con los ingredientes más frescos. Un clásico renovado." },
        food13:      { title: "Favorito del Compadre", desc: "El plato que todos piden. Rico, abundante y con todo el sazón." },
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
          title: "1. Red or Green Chilaquiles",
          desc: "Fried corn tortilla bathed in salsa. Served with beans, potatoes, fresh cheese, onion, sour cream, and eggs your way!"
        },
        {
          title: "2. Eggs Your Way Plate",
          desc: "Served with potatoes, beans, and tortillas (flour or corn)."
        },
        {
          title: "3. Huevos Rancheros Plate",
          desc: "With 4 sunny-side-up eggs and ranchera sauce. Served with beans and potatoes."
        },
        {
          title: "4. Pancakes Plate",
          desc: "Served with 3 pancakes, scrambled eggs, and bacon."
        },
        {
          title: "5. Omelette Plate",
          desc: "Egg omelet made with beaten eggs cooked in butter. Order it with veggies or your favorite ingredients! Ham, cheese, bacon, spinach, mushrooms, and more!"
        }
      ],
      photo1: "Daily Breakfast",
      photo2: "Eggs Your Way",
      photo3: "House Special",
      photo4: "More Options"
    },
    menu: {
      sectionTitle: "Lunch & Dinner",
      mainTitle: "Our Menu",
      meatTitle: "Meat Choices",
      items: {
        tacos:       { title: "Tacos", desc: "Classic and delicious. Corn or flour tortilla with your favorite meat." },
        plates:      { title: "Special Plate", desc: "For big appetites! Your favorite meat served with rice and beans." },
        food4:       { title: "Daily Special", desc: "A generous portion made with the freshest ingredients of the day." },
        food6:       { title: "Chef's Pick", desc: "A unique combination of flavors you'll only find here." },
        food8:       { title: "Kitchen Favorite", desc: "Our kitchen's top pick. Get ready to be amazed." },
        burrito:     { title: "Burritos", desc: "Giant flour tortilla, rice, beans, and meat of your choice." },
        sopes:       { title: "Sopes", desc: "Thick corn base with pinched edges, beans, lettuce, and cream." },
        quesadillas: { title: "Quesadillas", desc: "Folded flour tortilla with lots of melted cheese and meat." },
        food9:       { title: "Special Combo", desc: "The perfect choice to share. Hearty and full of flavor." },
        food11:      { title: "Family Plate", desc: "Great for the whole family. Big portions and authentic taste." },
        food12:      { title: "House Delight", desc: "Made with the freshest ingredients. A classic, reimagined." },
        food13:      { title: "Compadre's Favorite", desc: "The dish everyone orders. Rich, hearty, and full of homemade flavor." },
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