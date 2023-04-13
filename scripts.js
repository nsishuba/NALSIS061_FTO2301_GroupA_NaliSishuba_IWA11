
const root1 = document.querySelector("[data-key = order1]");
let biscuits1 = document.querySelector(".biscuit");
let donuts1 = document.querySelector(".donuts");
let pancakes1 = document.querySelector(".pancakes");
let status1 = document.querySelector(".status");

const root2 = document.querySelector("[data-key = order2]");
let biscuits2 = document.querySelector(".biscuits");
let donuts2 = document.querySelector(".donuts");
let pancakes2 = document.querySelector(".pancakes");
let status = document.querySelector(".status");

const root3 = document.querySelector("[data-key = order3]");
let biscuits3 = document.querySelector(".biscuits");
let donuts3 = document.querySelector(".donuts");
let pancakes3 = document.querySelector(".pancakes");
let status3 = document.querySelector(".status");

// let biscuitsCount = document.querySelector("dd.count")
biscuits1 = root1.getAttribute("data-biscuits");
donuts1 = root1.getAttribute("data-donuts");
pancakes1 = root1.getAttribute("data-pancakes");
status1 = root1.getAttribute("data-status") ? "Delivered" : "Pending"

biscuits1 = root2.getAttribute("data-biscuits");
donuts1 = root2.getAttribute("data-donuts");
pancakes1 = root2.getAttribute("data-pancakes");
status1 = root2.getAttribute("data-status") ? "Delivered" : "Pending"

biscuits3 = root3.getAttribute("data-biscuits");
donuts3 = root3.getAttribute("data-donuts");
pancakes3 = root3.getAttribute("data-pancakes");
status3 = root3.getAttribute("data-status") ? "Delivered" : "Pending"