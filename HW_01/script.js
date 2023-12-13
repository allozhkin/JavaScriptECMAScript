"use strict";

// Task 1

const array = [1, 5, 7, 9];
console.log(Math.min(...array));

// Task 2

const createCounters = () => {
  let counter = 0;
  return {
    increment: () => ++counter,
    decrement: () => --counter,
  };
};
const ink = createCounters();
const dec = createCounters();

console.log(ink.increment());
console.log(ink.increment());
console.log(dec.decrement());
console.log(dec.decrement());

// Task 3

let searchElement = [];
function findElementByClass(rootEl, classEl) {
  if (rootEl.hasChildNodes()) {
    for (let element of rootEl.children) {
      if (element.className === classEl) {
        searchElement.push(element);
        if (searchElement[0].className !== classEl) {
          searchElement = [];
          searchElement.push(element);
        }
      }
      findElementByClass(element, classEl);
    }
  }
  return searchElement[0];
}

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "chaeld6");
console.log(targetElement);

console.log("");

const rootElement_1 = document.getElementById("root1");
const targetElement_1 = findElementByClass(rootElement_1, "class5");
console.log(targetElement_1);
