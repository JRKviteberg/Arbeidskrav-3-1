const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Lys modus";
    toggleBtn.classList.remove("off");
    toggleBtn.classList.add("on");
    stopbutton.classList.remove("off");
    stopbutton.classList.add("on");
  } else {
    toggleBtn.textContent = "Mørk modus";
    toggleBtn.classList.remove("on");
    toggleBtn.classList.add("off");
    stopbutton.classList.remove("on");
    stopbutton.classList.add("off");
  }

  console.log("Dark mode toggled");
});

const monthlybundle = [
  {
    name: "Pumpkin spice islatte",
    description:
      "En deilig islatte med smak av gresskar og varme krydder, perfekt for de varme høstdagene.",
    image: "assets/images/bunbundle.png",
  },
  {
    name: "Pumpkin spice latte",
    description:
      "En sesongbasert favoritt som kombinerer espresso, steamet melk og gresskarpuré, toppet med krem og kanel.",
    image: "assets/images/pumpinicedbunble.png",
  },
  {
    name: "Pumpkin Bolle",
    description:
      "En myk og saftig bolle fylt med gresskarpuré og krydret med varme krydder som kanel og muskat, perfekt for høstsesongen.",
    image: "assets/images/pumpinspicelattebundle.png",
  },
];

const container = document.getElementById("monthly-bundle");

for (let i = 0; i < monthlybundle.length; i++) {
  const items = monthlybundle[i];

  const card = document.createElement("div");
  card.classList.add("bundle-card");

  card.innerHTML = `
    <img src="${items.image}" alt="Bilde av ${items.name}" class="bundle-photo">
    <h3>${items.name}</h3>
    <p>${items.description}</p>
    <button onclick="openOrder('${items.name}')">Bestill</button>
  `;

  container.appendChild(card);
}

function openOrder() {
  alert("Bestillingen er lagt til i handlekurven!");
}

document.addEventListener("DOMContentLoaded", () => {
  const antallLogoer = 20;
  const logoer = [];
  const container = document.querySelector(".logoDriftContainer");

  const startLeftPercent = 50;
  const startTopPx = 20;

  for (let i = 0; i < antallLogoer; i++) {
    const logo = document.createElement("img");
    logo.src = "./assets/images/logokaffensarv.png";
    logo.alt = "Kaffens arv logo";
    logo.className = "driftLogo";

    logo.style.position = "absolute";
    logo.style.left = `${startLeftPercent}%`;
    logo.style.top = `${startTopPx}px`;
    logo.style.transform = "translateX(-50%)";

    logo.style.width = "120px";
    logo.style.height = "auto";
    logo.style.opacity = 0;

    container.appendChild(logo);
    logoer.push(logo);
  }

  function flyttLogoer() {
    for (const logo of logoer) {
      const size = 50 + Math.random() * 70;
      logo.style.width = `${size}px`;
      logo.style.height = "auto";

      logo.style.left = `${Math.random() * 100}%`;
      logo.style.top = `${Math.random() * window.innerHeight}px`;
      logo.style.transform = "translateX(0)";
      logo.style.transition = "all 1s";
      logo.style.opacity = 1;
    }
  }

  document.addEventListener("click", flyttLogoer);

  const myInterval = setInterval(flyttLogoer, 10000);

  function stoppLogoer() {
    clearInterval(myInterval);
    document.removeEventListener("click", flyttLogoer);

    for (const logo of logoer) {
      logo.style.position = "absolute";
      logo.style.left = `50%`;
      logo.style.top = `20px`;
      logo.style.transform = `translateX(-50%)`;
      logo.style.width = "120px";
      logo.style.height = "auto";
      logo.style.transition = "all 1s";
      logo.style.opacity = 0;
    }
  }

  const stopBtn = document.getElementById("stopbutton");

  stopBtn.addEventListener("click", stoppLogoer);
});
