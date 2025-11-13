// selecting all products in the cart (all <article> elements) with class".order-item"

//select the headinf that shows the number of orders
const headingEl = document.getElementById("cart-title");

const produkter = document.querySelectorAll(".order-item"); //looks for ALL elements with class ".order-item" stored in produkter

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

//function that updates the "mine ordre (x)" text
function updateOrderCount() {
  let totalItems = 0;

  //loop through all order items and add up the counts
  for (let i = 0; i < produkter.length; i++) {
    const count = parseInt(produkter[i].querySelector(".count").textContent);
    totalItems += count;

    //update heading text with total count
    headingEl.textContent = `Mine ordre (${totalItems})`;

    updateOrderCount();
  }
}

//Loop through every order item
//iterate -> do the same action to every itrms in a list (for similar collection of data)
for (let i = 0; i < produkter.length; i++) {
  //selecting Buttons and Count display within each item
  const item = produkter[i];
  const minusBtn = item.querySelector(`.minus`);
  const plusBtn = item.querySelector(`.plus`);
  const countElement = item.querySelector(`.count`);

  //plus button -> increase quantity
  plusBtn.addEventListener(`click`, function () {
    let currentCount = parseInt(countElement.textContent);
    currentCount++;
    countElement.textContent = currentCount;

    //update the total price each time item is added
    updateTotalPrice();
    updateOrderCount();
  });

  //minus button -> decrease quantity
  minusBtn.addEventListener(`click`, function () {
    let currentCount = parseInt(countElement.textContent);
    if (currentCount > 0) {
      currentCount--;
      countElement.textContent = currentCount;

      //update the total price eahc time item is added
      updateTotalPrice();
      updateOrderCount();
    }
  });
}


