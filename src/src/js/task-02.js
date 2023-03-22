const ingredientList = document.querySelector("#ingredients");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const products = [];

ingredients.forEach((ingr) => {
  const product = document.createElement("li");
  product.textContent = ingr;
  product.classList.add("item");
  products.push(product);
});

ingredientList.append(...products);
console.log(ingredientList);
