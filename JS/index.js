let shiftTimer;
let co2 = 0;

document.addEventListener("keydown", (e) => {
  if (e.key === "Shift") {
    shiftTimer = setTimeout(() => {
      document.getElementById("co2-meter").style.display = "block";
    }, 3000);
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Shift") {
    clearTimeout(shiftTimer);
  }
});

document.addEventListener("scroll", () => {
  co2++;
  const text = document.getElementById("co2-text");
  if (text) text.textContent = `CO₂: ${co2} kaffegram`;
});
