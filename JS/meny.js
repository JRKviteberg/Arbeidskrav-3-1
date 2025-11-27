const meny = {
    varmeDrikker: [
        {
            navn: "Signaturbrygg",
            img: "./assets/images/Signaturbrygg.png",
            tekst: "Fyldig kaffe fra Brasil med smak av nøtter, marsipan og sjokolade.",
            pris: 90,
            favoritt: false
        },
        {
            navn: "Americano",
            img: "./assets/images/Americano.png",
            tekst: "Espresso blandet med varmt vann. Fyldig og ren kaffesmak.",
            pris: 90,
            favoritt: false
        },
        {
            navn: "Kaffe Latte",
            img: "./assets/images/Kaffe-Latte.png",
            tekst: "Espresso toppet med kremet, fløyelsmyk melk.",
            pris: 90,
            favoritt: false
        },
        {
            navn: "Chai Latte",
            img: "./assets/images/chai-latte.png",
            tekst: "Krydret te med kardemomme, nellik, kanel og melk.",
            pris: 90,
            favoritt: false
        }
    ],

    kaldeDrikker: [
        {
            navn: "Islatte Mocca",
            img: "./assets/images/islatte mocca.png",
            tekst: "Espresso med sjokolade og melk. Søt og fyldig.",
            pris: 90,
            favoritt: false
        },
        {
            navn: "Islatte Karamell",
            img: "./assets/images/islatte-karamell.png",
            tekst: "Espresso med karamell og melk.",
            pris: 90,
            favoritt: false
        },
        {
            navn: "Sitron og fersken iste",
            img: "./assets/images/sitrong-og-ferseken-iste.png",
            tekst: "Frisk iste med fersken og sitron.",
            pris: 90,
            favoritt: false
        },
        {
            navn: "Appelsin og fersken iste",
            img: "./assets/images/appelsin-og-ferseken-iste.png",
            tekst: "Fruktig iste med appelsin og fersken.",
            pris: 90,
            favoritt: false
        }
    ],

    sandwicher: [
        {
            navn: "Røykelaks Bagel",
            img: "./assets/images/Røykelaks-bagel.png",
            tekst: "Bagel med røkelaks, rødløk og spinat.",
            pris: 90,
            favoritt: false
        },
        {
            navn: "Focaccia Kylling & Mozzarella",
            img: "./assets/images/focaccia-kylling-mozzarella.png",
            tekst: "Focaccia med kylling, mozzarella og pesto.",
            pris: 90,
            favoritt: false
        },
        {
            navn: "Creamy Avocado Bagel",
            img: "./assets/images/creamy-avocado-bagel.png",
            tekst: "Bagel med vegansk pålegg og avokado.",
            pris: 90,
            favoritt: false
        },
        {
            navn: "Focaccia Salami & Brie",
            img: "./assets/images/focaccia-salami-brie.png",
            tekst: "Focaccia med salami og brie.",
            pris: 90,
            favoritt: false
        }
    ],

    desserter: [
        {
            navn: "Pumpkin bolle",
            img: "./assets/images/pumpkinbolle.png",
            tekst: "Hvetebolle med gresskarfyll og maissmuler.",
            pris: 90,
            favoritt: false
        },
        {
            navn: "Vaniljebolle",
            img: "./assets/images/vaniljebolle.png",
            tekst: "Bolle fylt med vaniljekrem.",
            pris: 90,
            favoritt: false
        },
        {
            navn: "Gulrotmuffin",
            img: "./assets/images/gulrotmuffin.png",
            tekst: "Saftig muffin med gulrot og kardemomme.",
            pris: 90,
            favoritt: false
        },
        {
            navn: "Choco Four Muffin",
            img: "./assets/images/choco-four-muffin.png",
            tekst: "Muffin med sjokolade og trøfler.",
            pris: 90,
            favoritt: false
        }
    ],
};


function lagProduktHTML(produkt, kategori, index) {
    return `
        <div class="product">
            <img src="${produkt.img}" alt="${produkt.navn}">
            <h3>${produkt.navn}</h3>
            <p>${produkt.tekst}</p>
            <p>${produkt.pris} kr</p>

            <span class="heart" onclick="toggleFavoritt('${kategori}', ${index})">
                ${produkt.favoritt ? "❤️" : "🤍"}
            </span>

            <button>Bestill</button>
        </div>
    `;
}

function visProdukter() {
    for (let kategori in meny) {
        const container = document.querySelector(`.${kategori}`);
        container.innerHTML = ""; 

        meny[kategori].forEach((produkt, index) => {
            container.innerHTML += lagProduktHTML(produkt, kategori, index);
        });
    }
}

visProdukter();


function toggleFavoritt(kategori, index) {
    const produkt = meny[kategori][index];

    produkt.favoritt = !produkt.favoritt; 

    if (produkt.favoritt) {
        alert(`${produkt.navn} lagt til som favoritt ❤️`);
    } else {
        alert(`${produkt.navn} fjernet fra favoritter 🤍`);
    }

    visProdukter(); 
}
