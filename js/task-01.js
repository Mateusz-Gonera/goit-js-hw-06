const ulCategories = document.querySelector("ul#categories");
const listItem = document.querySelectorAll("li.item");
const arrH2 = Array.from(listItem);
console.log(`Number of categories: ${ulCategories.children.length}`);
const mapArrH2 = arrH2.map(element => {
      return console.log(`Category: ${element.firstElementChild.textContent} 
Elements: ${element.lastElementChild.children.length}`);
});
