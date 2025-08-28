// heart count update 

const heartCount = document.getElementById("heart-counter");
const cardHearts = document.getElementsByClassName("card-heart");

let count = 0;

for (let i = 0; i < cardHearts.length; i++) {
  cardHearts[i].addEventListener("click", function() {
    count++;
    heartCount.innerText = count;
  });
}