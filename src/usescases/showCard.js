/**
 * @param {String} card card drawn from the deck
 * @param {Number} turn turn of the player
 * @param {HTMLElement} divCards reference of the html element where the card will be displayed
 * @returns {HTMLElement} return image
 */

export const showCard = (card, turn, divCards) => {
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${card}.png`;
    imgCarta.classList.add("carta");
    divCards[turn].append(imgCarta);
}