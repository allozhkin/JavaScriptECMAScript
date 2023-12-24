"use strict";

const url = "https://jsonplaceholder.typicode.com/users/";

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

try {
  const data = await getData(url);
  const body = document.querySelector("body");
  data.forEach((element) => {
    let item = document.createElement("p");
    item.innerHTML = `Пользователь номер: ${element.id} <br>
         Имя пользователя: ${element.name} <br>
         email пользователя: ${element.email} <br>`;
    body.appendChild(item);
    item.addEventListener("click", function (e) {
      e.target.remove("");
    });
  });
} catch (error) {
  console.log("lost signal");
}
