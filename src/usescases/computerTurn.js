import { askCard, playerScore, showCard } from "./index";
import Swal from 'sweetalert2'

/**
 * @param {Number} opponentScore opposing player's score
 * @param {Array<String>} deck deck of cards
 * @param {Array} player array of players where position 0 is the main player and position 1 is the cpu
 * @param {HTMLElement} htmlScore html element reference where the accumulated score will be shown
 * @param {HTMLElement} divCards reference of the html element where the card will be displayed
 */

export const computerTurn = (opponentScore, deck = [], player, htmlScore, divCards) => {
    let puntosCPU = 0;
    do {
        const carta = askCard(deck);

        puntosCPU = playerScore(carta, player, player.length - 1, htmlScore);
        showCard(carta, player.length - 1, divCards);

        if (puntosCPU === 21 && opponentScore != 21) {
            // console.warn("Blackjack, gano la CPU")
            Swal.fire('Blackjack, gano la CPU');
        } else if (puntosCPU > opponentScore && puntosCPU < 21) {
            // console.warn("Gano la CPU")
            Swal.fire('Gano la CPU');
        } else if (puntosCPU === opponentScore && opponentScore != 21) {
            // console.warn("Empate")
            Swal.fire('Empate');
        } else if (puntosCPU > 21) {
            // console.warn("Gano el Jugador")
            Swal.fire('Gano el Jugador, la CPU se paso de 21');
        }

    } while ((puntosCPU < opponentScore) && (opponentScore <= 21));
}