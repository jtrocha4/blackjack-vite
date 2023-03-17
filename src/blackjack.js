import _ from 'underscore';
import Swal from 'sweetalert2';

import { createDeck, askCard, showCard, playerScore } from './usescases';
import { computerTurn } from './usescases/ComputerTurn';

/**
 * C => Clover
 * D => Diamonds 
 * H => Hearts
 * S => Spades
 */

let deck = [];
const deckTypes = ["C", "D", "H", "S"],
    deckSpecials = ["A", "J", "K", "Q"];

let puntosJugadores = [];

const inicializarJuego = (numeroJugadores = 2) => {
    deck = createDeck(deckTypes, deckSpecials);
    askCard(deck);
    puntosJugadores = [];
    // console.clear()

    for (let i = 0; i < numeroJugadores; i++) {
        puntosJugadores.push(0);
        divCartas[i].innerHTML = "";
        puntajeHTML[i].innerHTML = 0;
    }
}

//Referencias HTML
const puntajeHTML = document.querySelectorAll("small")
const divCartas = document.querySelectorAll(".divCartas")

const eventPedirCarta = document.getElementById("btnPedirCarta")
const eventPlantarse = document.getElementById("btnPlantarse")
const eventNuevoJuego = document.getElementById("btnNuevoJuego")

//Eventos 
eventPedirCarta.addEventListener("click", () => {
    const card = askCard(deck);
    let puntosJugador = playerScore(card, puntosJugadores, 0, puntajeHTML);
    showCard(card, 0, divCartas);

    if (puntosJugador === 21) {
        eventPedirCarta.disabled = true;
        eventPlantarse.disabled = true;
        computerTurn(puntosJugador, deck, puntosJugadores, puntajeHTML, divCartas);
        Swal.fire('Blackjack, ganaste Jugador');
    } else if (puntosJugador > 21) {
        eventPedirCarta.disabled = true;
        eventPlantarse.disabled = true;
        computerTurn(puntosJugador, deck, puntosJugadores, puntajeHTML, divCartas);
        Swal.fire('Perdiste Jugador, te pasaste de 21');
    }

})

eventPlantarse.addEventListener("click", () => {
    const puntosJugador = puntosJugadores[0];

    if (puntosJugador > 0) {
        // console.log(`El jugador decide plantarse con ${puntosJugador}`)
        eventPedirCarta.disabled = true;
        eventPlantarse.disabled = true;
        computerTurn(puntosJugador, deck, puntosJugadores, puntajeHTML, divCartas);
    } else {
        // console.log("Aun esta temprano para plantarte Jugador, Por favor pide una carta")
        Swal.fire('Aun esta temprano para plantarte Jugador, Por favor pide una carta');
    }
})

eventNuevoJuego.addEventListener("click", () => {
    inicializarJuego();
    eventPedirCarta.disabled = false;
    eventPlantarse.disabled = false;
})
