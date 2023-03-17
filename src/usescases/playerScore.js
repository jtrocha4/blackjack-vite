import { cardValue } from './index';

/**
 * @param {String} card card card drawn from the deck
 * @param {Array} player array of players where position 0 is the main player and position 1 is the cpu
 * @param {Number} turn turn of the player where the last turn is that of the CPU
 * @param {HTMLElement} htmlScore html element reference where the accumulated score will be shown
 * @returns 
 */

export const playerScore = (card, player, turn, htmlScore) => {
    player[turn] = player[turn] + cardValue(card);
    htmlScore[turn].innerHTML = player[turn];
    return player[turn];
}
