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

  console.log("Dark mode toggled");
});

const logobutton = document.getElementById("beanbutton");

logobutton.addEventListener("click", growSprout);

function growSprout() {
  alert("The logo was clicked!");
}

const monthlybundle = [
  {
    name: "Chai latte",
    description:
      "En varm og krydret drikk laget med sort te, melk og en blanding av krydder som kanel, kardemomme og ingefær.",
    image: "assets/images/bunbundle.png",
  },
  {
    name: "Pumpkin spice islatte",
    description:
      "En forfriskende kald drikk som kombinerer espresso, isbiter, melk og vår signatur gresskarkrydderblanding, toppet med pisket krem og et dryss av kanel.",
    image: "assets/images/pumpinicedbunble.png",
  },
  {
    name: "Pumpkin spice latte",
    description:
      "En kremet og smakfull høstfavoritt laget med espresso, steamet melk og vår signatur gresskarkrydderblanding, toppet med pisket krem og et dryss av kanel.",
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

function openContactForm(name) {
  const message = prompt(`Skriv en melding til ${name}:`);
  if (message) {
    alert("Din melding er sendt!");
  }
}
