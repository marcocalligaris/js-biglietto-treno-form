// Il programma dovrà mostrare un form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).

// * Variabili


const buttonSend = document.getElementById('send-data');
const buttonReset = document.getElementById('reset');
const ticket = document.querySelector('.ticket');


buttonSend.addEventListener('click', function() {
    const passenger = document.getElementById('name').value;
    const kms = document.getElementById('kms').value;
    const ageOption = document.getElementById('age-choice').value;

    let ticketPrice = parseInt(kms * 0.21);

    if (ageOption == 'junior') {
        ticketPrice *= 0.8;
    }

    else if (ageOption == 'senior') {
        ticketPrice *= 0.6;
    }

    let priceDisplay = ticketPrice.toFixed(2);

    document.getElementById('ticket-price').innerText = 'Prezzo del biglietto € ' + priceDisplay;

    document.getElementById('passenger-name').innerText = 'NOME DEL PASSEGGERO ' + passenger;
})





