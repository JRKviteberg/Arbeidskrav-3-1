// selecting all products in the cart (all <article> elements) with class".order-item"
const headingEl = document.getElementById("cart-title");
const totalEl = document.getElementById("total-price"); //will use this to display the total price in the cart
const bordEl = document.getElementById("table-number"); //grabs the HTML element where the table number will be displayed
const bestillBtn = document.getElementById("order-btn"); //this select the button which users will click to complete their order
const tømBtn = document.getElementById("clear-btn"); //reset the cart
const bordBtn = document.getElementById("table-btn"); //after clicking this button it allows the user to enter a table number
const orderlist = document.querySelector(".order-list"); //selecting the parent container of all products
const produkter = document.querySelectorAll(".order-item"); // get initial list of products to set up event listeners

//function that updates the "mine ordre (x)" text
function updateOrderCount() {
  let totalItems = 0;

  // get fresh updated list
  const currentProducts = document.querySelectorAll(".order-item");

  // loop through FRESH list, not the old one
  for (let i = 0; i < currentProducts.length; i++) {
    const count = parseInt(
      currentProducts[i].querySelector(".count").textContent
    );
    totalItems += count;
  }

  // update heading text
  headingEl.textContent = `Mine ordre (${totalItems})`;
}

//Loop through every order item
//iterate -> do the same action to every items in a list (for similar collection of data)
for (let i = 0; i < produkter.length; i++) {
  //selecting Buttons and Count display within each item
  const item = produkter[i];
  const minusBtn = item.querySelector(".minus");
  const plusBtn = item.querySelector(".plus");
  const countElement = item.querySelector(".count");
  const deleteBtn = item.querySelector(".delete-btn");

  plusBtn.addEventListener("click", function () {
    let currentCount = parseInt(countElement.textContent);
    currentCount++;
    countElement.textContent = currentCount;
    updateTotalPrice();
    updateOrderCount();
  });

  minusBtn.addEventListener("click", function () {
    let currentCount = parseInt(countElement.textContent);
    if (currentCount > 0) {
      currentCount--;
      countElement.textContent = currentCount;
      updateTotalPrice();
      updateOrderCount();
    }
  });

  deleteBtn.addEventListener("click", function () {
    //remove the item from the page
    item.remove();
    updateTotalPrice();
    updateOrderCount();
  });
} //closes the loop

function updateTotalPrice() {
  let total = 0;
  let totalItems = 0;

  //get fresh list of products in case some were deleted)
  const currentProducts = document.querySelectorAll(".order-item");

  //loop through current products on the page
  for (let i = 0; i < currentProducts.length; i++) {
    const count = parseInt(
      currentProducts[i].querySelector(".count").textContent
    );
    const price = parseInt(currentProducts[i].getAttribute("item-price"));
    total += count * price;
    totalItems += count;
  }

  if (totalItems > 4) {
    total *= 0.9;
    totalEl.textContent = `${Math.round(total)}kr (10% RABATT🥳)`;
  } else {
    totalEl.textContent = `${total}kr`;
  }
}
