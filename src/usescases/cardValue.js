/**
 * @param {String} card card value in string
 * @returns {Number} returns the value of the card in number
 */

export const cardValue = (card) => {

    if (!card) throw "The value of the card is required for this function";


    let value = card.substring(0, card.length - 1);
    // console.log(`value Carta: ${value}`);
    return (isNaN(value)) ? ((value === "A") ? 11 : 10) : value * 1;
}