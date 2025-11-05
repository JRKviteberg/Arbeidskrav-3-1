const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Lys modus";
    toggleBtn.classList.remove("off");
    toggleBtn.classList.add("on");
  } else {
    toggleBtn.textContent = "Mørk modus";
    toggleBtn.classList.remove("on");
    toggleBtn.classList.add("off");
  }
});
