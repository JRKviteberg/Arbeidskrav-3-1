const btn = document.getElementById("toggleBtn");

btn.addEventListener("click", () => {
  // Toggle knappens stil
  btn.classList.toggle("on");
  btn.classList.toggle("off");

  // Toggle dark mode på body
  document.body.classList.toggle("dark");

  // Oppdatert knappetekst
  if (document.body.classList.contains("dark")) {
    btn.textContent = "Light mode";
  } else {
    btn.textContent = "Dark mode";
  }
});
