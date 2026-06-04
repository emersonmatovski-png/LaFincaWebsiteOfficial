const menuData = [
  { category: "nachos", name: "Ground Beef Nachos", price: "$13.13", description: "Beans, guacamole, sour cream, pico de gallo, shredded cheese, cheese dip and jalapeños" },
  { category: "nachos", name: "Asada Nachos", price: "$13.74", description: "Beans, guacamole, sour cream, pico de gallo, shredded cheese, cheese dip and jalapeños" },
  { category: "nachos", name: "Cheese Beans Jalapeños Nachos", price: "$8.74", description: "" },
  { category: "nachos", name: "Chorizo Nachos", price: "$15.63", description: "Beans, guacamole, sour cream, pico de gallo, shredded cheese, cheese dip and jalapeños" },
  { category: "nachos", name: "La Finca Nachos", price: "$14.99", description: "Beans, guacamole, sour cream, pico de gallo, shredded cheese, cheese dip and jalapeños" },
  { category: "nachos", name: "Cheese Jalapeños Nachos", price: "$7.49", description: "" },

  { category: "beverages", name: "Iced Tea", price: "$3.75", description: "" },
  { category: "beverages", name: "Mexican Coke Bottle", price: "$4.37", description: "The same great taste made with only pure cane sugar and served in a bottle" },
  { category: "beverages", name: "Agua Fresca", price: "$3.75", description: "" },
  { category: "beverages", name: "Jarritos", price: "$4.38", description: "" },

  { category: "tostadas", name: "Beans Tostada", price: "$9.99", description: "" },
  { category: "tostadas", name: "Carne Asada Tostada", price: "$10.63", description: "" },
  { category: "tostadas", name: "Chicken Tostada", price: "$9.99", description: "" },
  { category: "tostadas", name: "Beef Tostada", price: "$9.99", description: "" },

  { category: "sides", name: "Elotes", price: "$7.50", description: "Grilled Mexican street corn" },

  { category: "burritos", name: "Carne Asada Burrito", price: "$14.99", description: "" },
  { category: "burritos", name: "Carnitas Burrito", price: "$15.00", description: "" },
  { category: "burritos", name: "Tinga Burrito", price: "$13.74", description: "" },
  { category: "burritos", name: "Campechano Burrito", price: "$15.63", description: "Chorizo and Asada" },
  { category: "burritos", name: "Carne Molida Burrito", price: "$13.74", description: "" },
  { category: "burritos", name: "Birria Burrito", price: "$15.63", description: "" },
  { category: "burritos", name: "Beans And Cheese Burrito", price: "$6.56", description: "" },
  { category: "burritos", name: "Chorizo Burrito", price: "$14.99", description: "" },

  { category: "tortas", name: "Lengua Torta", price: "$14.99", description: "" },
  { category: "tortas", name: "Tinga Torta", price: "$14.99", description: "" },
  { category: "tortas", name: "Carne Asada Torta", price: "$14.99", description: "" },
  { category: "tortas", name: "Carnitas Torta", price: "$13.74", description: "" },
  { category: "tortas", name: "Birria Torta", price: "$13.74", description: "" },

  { category: "sides", name: "Mexican Rice", price: "$3.75", description: "" },
  { category: "sides", name: "Chiles Toreados", price: "$3.74", description: "Jalapeño peppers and onions" },
  { category: "sides", name: "Churros", price: "$4.06", description: "" },
  { category: "sides", name: "Cheese Dip", price: "$4.99", description: "8 Oz" },
  { category: "sides", name: "Salsa Roja", price: "$1.25", description: "" },
  { category: "sides", name: "Consome", price: "$1.88", description: "" },
  { category: "sides", name: "Beans", price: "$3.75", description: "" },
  { category: "sides", name: "Sauce For Chips", price: "$2.49", description: "4 Oz" },
  { category: "sides", name: "Pico De Gallo", price: "$3.13", description: "8 Oz" },
  { category: "sides", name: "Rice", price: "$3.75", description: "" },
  { category: "sides", name: "Guacamole", price: "$5.63", description: "8 Oz" },
  { category: "sides", name: "Shredded Cheese", price: "$2.49", description: "2 Oz" },
  { category: "sides", name: "Chips", price: "$3.74", description: "" },
  { category: "sides", name: "Sour Cream", price: "$1.88", description: "4 Oz" },
  { category: "sides", name: "Salsa Verde", price: "$1.25", description: "" },

  { category: "fries", name: "Chorizo Fries", price: "$13.74", description: "" },
  { category: "fries", name: "French Fries", price: "$4.88", description: "" },
  { category: "fries", name: "Tinga Fries", price: "$12.49", description: "" },
  { category: "fries", name: "Carne Asada Fries", price: "$13.74", description: "" },

  { category: "tacos", name: "Campechano Taco", price: "$5.31", description: "" },
  { category: "tacos", name: "Carnitas / Pork Taco", price: "$4.38", description: "" },
  { category: "tacos", name: "Al Pastor Taco", price: "$4.38", description: "" },
  { category: "tacos", name: "Birria / Shredded Beef Taco", price: "$4.69", description: "" },
  { category: "tacos", name: "Carne Molida / Ground Beef Taco", price: "$4.06", description: "Lettuce, tomatoes, shredded cheese, and sour cream" },
  { category: "tacos", name: "Flautas", price: "$10.63", description: "4 rolled corn tortillas stuffed with tinga or ground beef, then deep-fried and served with lettuce, tomatoes, guacamole, cheese and sour cream" },
  { category: "tacos", name: "Carne Asada / Grilled Steak Taco", price: "$4.69", description: "" },
  { category: "tacos", name: "Fish Taco", price: "$4.38", description: "Breaded fish fillet with lettuce and special dressing" },
  { category: "tacos", name: "Tinga / Shredded Chicken Taco", price: "$4.38", description: "" },
  { category: "tacos", name: "Chorizo / Mexican Sausage Taco", price: "$4.38", description: "" },
  { category: "tacos", name: "Lengua Taco", price: "$5.31", description: "" },
  { category: "tacos", name: "Tripa Taco", price: "$5.31", description: "" },
  { category: "tacos", name: "Shrimp Taco", price: "$5.63", description: "" },

  { category: "salads", name: "Taco Salad", price: "$11.88", description: "Flour crisp tortilla shell with rice, beans, lettuce, sour cream, shredded cheese, and choice of meat tinga or ground beef" },
  { category: "salads", name: "Ensalada Carnitas", price: "$10.61", description: "" },
  { category: "salads", name: "Ensalada Tinga", price: "$10.61", description: "" },
  { category: "salads", name: "Ensalada Carne Asada", price: "$11.86", description: "" },

  { category: "quesadillas", name: "La Finca Quesabirria Combo", price: "$14.99", description: "3 Quesabirria with consome, rice, and beans" },
  { category: "quesadillas", name: "Tinga Quesadilla", price: "$13.74", description: "Chicken breast with sour cream, lettuce, tomatoes on the side" },
  { category: "quesadillas", name: "Carne Asada Quesadilla", price: "$14.38", description: "Steak, sour cream, lettuce, tomatoes on the side" },
  { category: "quesadillas", name: "Bean And Cheese Quesadilla", price: "$8.74", description: "" },
  { category: "quesadillas", name: "Cheese Quesadilla", price: "$8.13", description: "" },
  { category: "quesadillas", name: "Quesabirria Individual", price: "$3.75", description: "" },
  { category: "quesadillas", name: "Chimichanga", price: "$16.25", description: "" },
];

const categoryLabels = {
  nachos: "Nachos",
  beverages: "Beverages",
  tostadas: "Tostadas",
  burritos: "Burritos",
  tortas: "Tortas",
  sides: "Sides",
  fries: "Papas Fries",
  tacos: "Tacos",
  salads: "Salads",
  quesadillas: "Quesadillas",
};

const grid = document.getElementById("menu-grid");
const buttons = document.querySelectorAll(".menu-category-btn");

function renderMenu(category) {
  const items = category === "all" ? menuData : menuData.filter(item => item.category === category);

  grid.innerHTML = "";

  items.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "menu-item";
    card.style.animationDelay = `${i * 30}ms`;

    let html = `<span class="category-tag">${categoryLabels[item.category]}</span>`;
    html += `<h3>${item.name}</h3>`;
    if (item.description) {
      html += `<p class="description">${item.description}</p>`;
    }
    html += `<p class="price">${item.price}</p>`;

    card.innerHTML = html;
    grid.appendChild(card);
  });
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderMenu(btn.dataset.category);
  });
});

renderMenu("all");
