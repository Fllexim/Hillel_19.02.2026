const img = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
]
const random = Math.round(Math.random() * 8);

const randImg = document.createElement("img");
randImg.src = img[random];

document.body.appendChild(randImg);