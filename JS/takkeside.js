const teamMembers = [
    {name: "Jan-Roger", email: "janroger@kaffensarv.no", Image: "assets/takkeside/barista-mann.png"},
    {name: "Silje", email: "silje@kaffensarv.no"},
    {name: "Shaima", email: "shaima@kaffensarv.no"},
    {name: "Jostein", email: "jostein@kaffensarv.no"}
];

const container = document.getElementById("team-container");

for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];

    const card = document.createElement("div");
    card.classList.add ("team-card");

    card.innerHTML = `
    <h3>${member.name}</h3>
    <p>${member.email}</p>
    <button onclick="openContactForm('${member.name}')">Kontakt meg</button>
  `;

  container.appendChild(card);
}

function openContactForm(name) {
  const message = prompt(`Skriv en melding til ${name}:`);
  if (message) {
    alert("Din melding er sendt!");
  }
}