// selecting all products in the cart (all <article> elements) with class".order-item"
const produkter = document.querySelectorAll(".order-item"); //loks for ALL elements with class ".order-item" stored in produkter

//select the element that will show total price
const totalEl = document.getElementById("total-price"); //will use this ti displat the total price in the cart

//select the element that shows the table number
const bordEl = document.getElementById("table-number"); //grabs the HTMl element where the table number will be displayed

//select the "finish order" button
const bestillBtn = document.getElementById("order-btn"); //this select the button which users will click to complete their order

//select the "clear cart" button
const tømBtn = document.getElementById("clear-btn"); //reset the cart

//select the "add table number" button
const orderList = document.getElementById("table-btn"); //after clicking this button it allows the user to enter a table number

//select the container holding all order items
const orderlist = document.querySelectorAll(".order-list"); //selecting the parent container of all products

//to keep track of total price
let totalPris = 0; //starts at 0, will update whenever the user adds/removes items

//function that will calculate the total price
function updateTotal() {
  
  totalPris = 0; // Reset total price

  // Loop through all products
  produkter.forEach((produkt) => {
    const pris = Number(produkt.dataset.price); // price of product
    const antall = Number(produkt.querySelector(".count").textContent); // quantity
    totalPris += pris * antall; // add to total
  });

  // Calculate total number of items
  const totalAntall = Array.from(produkter).reduce(
    (sum, p) => sum + Number(p.querySelector(".count").textContent),
    0
  );

  // Apply discount if 5 or more items
  if (totalAntall >= 5) {
    totalEl.textContent = `${(totalPris * 0.9).toFixed(2)} kr (10% rabatt!)`;
  } else {
    totalEl.textContent = `${totalPris.toFixed(2)} kr`;
  }
}

//reset totalPris to 0
//Loop through each product -> get price from data-price attribute, -> get quantity from the .count span -> multiply price x quantity and add to totalPris.
//count total items using reduce()
//if 5 or more items -> apply 10% discount
//update totalEl to show the new price


//+/- button functionality
produkter.forEach((produkt) => {
  const minus = produkt.querySelector(".minus");
  const plus = produkt.querySelector(".plus");
  const antallEl = produkt.querySelector(".count");

  minus.addEventListener("click", () => {
    let antall = Number(antallEl.textContent);
    if (antall > 0) antall--;
    antallEl.textContent = antall;
    updateTotal();
  });

  plus.addEventListener("click", () => {
    let antall = Number(antallEl.textContent);
    antall++;
    antallEl.textContent = antall;
    updateTotal();
  });
});

//for each product, find the plus/minus buttons and the quantity span
//when minus is clicked -> decrease quantity by 1(not under 0), -> update html and total price
//when plus is clicked -> increase quantity by 1, -> update the html and total price




 
