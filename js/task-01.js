const docs = document.querySelectorAll(".item");
console.log(`Number of categories: ${docs.length}`);

docs.forEach((cat) => {
  const name = cat.firstElementChild.textContent;
  const elementsCount = cat.lastElementChild.childElementCount;
  console.log(`Category: ${name}`);
  console.log(`Elements: ${elementsCount}`);
});
