/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector(".card").classList.toggle(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNumber();
  // setTimeout(() => {
  //   document.querySelector(".card").classList.remove("heart");
  //   document.querySelector(".card").classList.add("spade");
  // }, 1000);
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "k"
  ];
  let suit = ["diamonds", "spades", "heart", "clubs"];

  let indexNumbers = Math.floor(Math.random() * numbers.length);

  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["diamonds", "spades", "hearts", "clubs"];

  let indexsuit = Math.floor(Math.random() * suit.length);

  return suit[indexsuit];
};
