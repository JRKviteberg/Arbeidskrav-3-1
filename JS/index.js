const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Lys modus";
    toggleBtn.classList.remove("off");
    toggleBtn.classList.add("on");
    beanbutton.classList.remove("off");
    beanbutton.classList.add("on");
  } else {
    toggleBtn.textContent = "Mørk modus";
    toggleBtn.classList.remove("on");
    toggleBtn.classList.add("off");
    beanbutton.classList.remove("on");
    beanbutton.classList.add("off");
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
/*
const funFact = [
  {
    fact: "Kaffebønner er egentlig steiner i kaffebær, som er en frukt fra kaffebusken.",
  },
  {
    fact: "Det første webkameraet ble oppfunnet ved Cambridge-universitetet i 1991 for å overvåke en kaffetrakter.",
  },
  {
    fact: "Finland er landet med høyest kaffeforbruk per innbygger.",
  },
  {
    fact: "Mørkere kaffebønner har faktisk mindre koffein enn lettere brente bønner.",
  },
  {
    fact:"Den eldste kaffetradisjonen er funnet i Jemen, hvor kaffehusene oppsto for minst 700 år siden."
  }
;
]

function popUpFact(popupFact) {
  const popup = document.createElement("div");
  popup.classList.add("fact-popup");
  
}*/
