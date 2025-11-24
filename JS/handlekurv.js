const headingEl = document.getElementById("cart-title");
const totalEl = document.getElementById("total-price");
const bordEl = document.getElementById("table-number");
const bestillBtn = document.getElementById("order-btn");
const tømBtn = document.getElementById("clear-btn");
const bordBtn = document.getElementById("table-btn");
const orderlist = document.querySelector(".order-list");
const produkter = document.querySelectorAll(".order-item");



function updateOrderCount() {
  let totalItems = 0;
  const currentProducts = document.querySelectorAll(".order-item");

  for (let i = 0; i < currentProducts.length; i++) {
    const count = parseInt(
      currentProducts[i].querySelector(".count").textContent
    );
    totalItems += count;
  }
  headingEl.textContent = `Mine ordre (${totalItems})`;
}

for (let i = 0; i < produkter.length; i++) {
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
    item.remove();
    updateTotalPrice();
    updateOrderCount();
  });
}
function updateTotalPrice() {
  let total = 0;
  let totalItems = 0;

  const currentProducts = document.querySelectorAll(".order-item");

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

tømBtn.addEventListener("click", () => {
  const currentProducts = document.querySelectorAll(".order-item");
  currentProducts.forEach((p) => p.remove());

  updateTotalPrice();
  updateOrderCount();

  alert("Handlekurven er tømt!");
});
bordBtn.addEventListener("click", () => {
  let bordnr = prompt("skriv inn bordnummer");

  if (!bordnr) return;
  bordnr = bordnr.trim();

  if (isNaN(bordnr)) {
    alert("ugyldig! kun tall er lov");
    return;
  }

  if (bordnr.length > 2 || bordnr.length === 0) {
    alert("Ugyldig! du må skrive kun 2 tall");
    return;
  }

  bordEl.textContent = `Bord: ${bordnr}`;
  alert(`Bordnummer er lagt til: ${bordnr}`);
});
bestillBtn.addEventListener("click", () => {
  if (!bordEl.textContent || bordEl.textContent.trim() === "") {
    alert("Du må først  velge et bord nummer før du kan fullføre bestillingen");
    return;
  }

  alert("Takk:) bestilling er fullført");
});
