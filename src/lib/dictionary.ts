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
      photo1: "Desayuno del Día",
      photo2: "Huevos al Gusto",
      photo3: "Especialidad de la Casa",
      photo4: "Más Opciones",
      burritoTitle: "Tacos & Burritos",
      burritoSubtitle: "Arma el tuyo",
      burritoDesc: "Tú decides qué lleva. Tortillas de harina calientitas hechas aquí mismo.",
      chilaquilesTitle: "Chilaquiles Rojos",
      chilaquilesSubtitle: "Tradicionales",
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
      sectionTitle: "Nuevo en el Menú",
      mainTitle: "Nuestros Bols",
      desc: "Porciones generosas, sabores intensos y combinaciones únicas. Próximamente con nombre y precio.",
      badge: "Próximamente",
      footnote: "*Nombres y precios disponibles muy pronto. ¡Pregunta en el mostrador!",
      items: {
        bol1: { title: "Bol 1", desc: "Una deliciosa combinación de ingredientes frescos sobre cama de arroz." },
        bol2: { title: "Bol 2", desc: "Sabor intenso con proteína al gusto y toppings de la casa." },
        bol3: { title: "Bol 3", desc: "Jugosa carne con verduras salteadas y salsa especial de El Compadre." },
        bol4: { title: "Bol 4", desc: "La opción perfecta para el que quiere variedad en cada mordida." },
        bol5: { title: "Bol 5", desc: "Nuestro favorito: completo, abundante y lleno de sabor casero." },
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
      heading: "Start Your Day Right",
      photo1: "Daily Breakfast",
      photo2: "Eggs Your Way",
      photo3: "House Special",
      photo4: "More Options",
      burritoTitle: "Build Your Own",
      burritoSubtitle: "Build your own",
      burritoDesc: "You decide what goes in. Warm flour tortillas made fresh right here.",
      chilaquilesTitle: "Red Chilaquiles",
      chilaquilesSubtitle: "Traditional",
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
      sectionTitle: "New on the Menu",
      mainTitle: "Our Bowls",
      desc: "Generous portions, bold flavors, and unique combinations. Coming soon with names and prices.",
      badge: "Coming Soon",
      footnote: "*Names and prices available very soon. Ask at the counter!",
      items: {
        bol1: { title: "Bowl 1", desc: "A delicious combination of fresh ingredients over a bed of rice." },
        bol2: { title: "Bowl 2", desc: "Bold flavor with your choice of protein and house toppings." },
        bol3: { title: "Bowl 3", desc: "Juicy meat with sautéed veggies and El Compadre's special sauce." },
        bol4: { title: "Bowl 4", desc: "The perfect option for those who want variety in every bite." },
        bol5: { title: "Bowl 5", desc: "Our favorite: complete, hearty, and full of homemade flavor." },
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