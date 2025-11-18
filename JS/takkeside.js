const teamMembers = [
  {
    name: "Jan-Roger",
    email: "janroger@kaffensarv.no",
    image: "assets/images/barista-mann.png",
  },
  {
    name: "Silje",
    email: "silje@kaffensarv.no",
    image: "assets/images/barista-dame.png",
  },
  {
    name: "Shaima",
    email: "shaima@kaffensarv.no",
    image: "assets/images/barista-dame.png",
  },
  {
    name: "Jostein",
    email: "jostein@kaffensarv.no",
    image: "assets/images/barista-mann.png",
  },
];

const container = document.getElementById("team-container");

for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];

  const card = document.createElement("div");
  card.classList.add("team-card");

  card.innerHTML = `
    <img src="${member.image}" alt="Bilde av ${member.name}" class="team-photo">
    <h3>${member.name}</h3>
    <p>${member.email}</p>
    <button onclick="openContactForm('${member.name}')">Kontakt meg</button>
  `;

  container.appendChild(card);
}

function openContactForm(name) {
  const popup = document.createElement("div");
  popup.classList.add("contact-popup");

  popup.innerHTML = `
    <div class="contact-content">
      <h3>Send melding til ${name}</h3>
      <textarea id="messageText" placeholder="Skriv meldingen her..."></textarea>
      <button id="sendMessage">Send</button>
      <button id="closePopup">Lukk</button>
    </div>
  `;

  document.body.appendChild(popup);

  const sendBtn = popup.querySelector("#sendMessage");
  const closeBtn = popup.querySelector("#closePopup");
  const textarea = popup.querySelector("#messageText");

  sendBtn.addEventListener("click", () => {
    if (textarea.value.trim() === "") {
      alert("Skriv en melding før du sender 😊");
      return;
    }
    alert("Din melding er sendt!");
  });
}
