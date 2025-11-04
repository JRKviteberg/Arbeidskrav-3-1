//const = connect JS variable to HTML element that already exists on the page



// disse finner alle produktene (hver artikkel med klassen "order-item")
//"go find all my products on the page and remember them in this lisrt callded "produkter""
const produkter = document.querySelectorAll("order-item");

//disse finner de viktigste elementene vi skal oppdatere eller trykke på
const totalEl = document.getElementById("total-price"); //viser totalprisen

//grabs <p> elementet with id "table-number", where it shows the table number
const bordEl = document.getElementById("table-number"); //viser bordnummeret 

//finds the "Bestill" button in html
//when user clicks this button, we will place the order
const bestillBtn = document.getElementById("order-btn"); //knappen for å bestille

const tømBtn = document.getElementById("clear-btn"); //knappen for å tømme handlekurven

const bordBtn = document.getElementById("table-btn"); //knappen for å legge til bordnummeret

//holder styr på den totale prisen
//let = a variable that can be changed later
//start at 0 before we add anything 
//each time we click +/- buttons, we will recalculate this number and update it
let totalPris = 0; //variabel for å holde styr på totalprisen




