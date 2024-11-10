// Dati


let state;
let discountpercent;
let baseTicketPrice;
let discountValue;
let totTicketPrice;
const ticketPrice = 0.21;

// Input
const formElement = document.getElementById("user-form");

let userDistance = document.getElementById("km");
let userAge = document.getElementById("age");
let userName = document.getElementById("name");

// Card check out
let nameCard = document.getElementById("checkout-name");
let distanceCard = document.getElementById("checkout-distance");
let stateCard = document.getElementById("checkout-state");
let discountCard = document.getElementById("checkout-discount");
let totalCard = document.getElementById("checkout-total");



// Esecuzione Logica


formElement.addEventListener("submit", function(event) {
    // Preveniamo il ricaricamento della pagina
    event.preventDefault();

    // Preleviamo i valori degli input
    const name = userName.value.trim();
    const distance = userDistance.value.trim();
    const age = userAge.value.trim();

    console.log("Nome passeggero:", name);

    if (!isNaN(distance) && !isNaN(age) 
        && distance !== null && age !== null 
        && distance !== "" && age !== "") {
        console.log(`km da percorrere: ${distance} km `);
        console.log(`Età utente: ${age} anni`);
        console.log(`Prezzo del biglietto per km percorso: ${ticketPrice} euro`);



        // Applichiamo lo stato e lo sconto in base all'età

        if(age < 18) {
            state = "minorenni";
            discountpercent = 20;
        }

        else if (age >= 65) {
            state = "over 65";
            discountpercent = 40;
        }

        else {
            state = "adulti";
            discountpercent = 0;
        }


        // Calcoliamo il prezzo del biglietto

        let baseTicketPrice = distance * ticketPrice;


        // aggiungiamo lo sconto e convertiamo il prezzo in float con 2 decimali

        let discountValue = (baseTicketPrice / 100) * discountpercent;

        let totTicketPrice = baseTicketPrice - discountValue;

        let totTicketPriceTwoDecimals = totTicketPrice.toFixed(2);

        // Assegnamo i valori alla card
        nameCard.innerHTML = name;
        distanceCard.innerHTML = distance;
        stateCard.innerHTML = state;
        discountCard.innerHTML = discountpercent;
        totalCard.innerHTML = totTicketPriceTwoDecimals; 


    // Output

        console.log(`Prezzo biglietto: ${baseTicketPrice.toFixed(2)} euro`); 

        if(state === "minorenni" || state === "over 65") {
            console.log(`Applicato sconto per ${state} del ${discountpercent}%`);
            console.log(`Prezzo finale del biglietto: ${totTicketPriceTwoDecimals} euro`);
        }
        


    }



    // Messaggio di errore

    else {
        alert("Inserire i dati correttamente con valore Numerico. se si sono inseriti decimali accertarsi di aver utilizzato il punto( . ) e non la virgola( , ). Riavvia la pagina e riprova ;)");
    }

});