/**
 * @param {Array<String>} deck deck of cards 
 * @returns returns the last card of the deck
 */

export const askCard = (deck) => {

    if (!deck) throw "The deck of cards is required for this function";

    if (deck.length === 0) throw "the deck of cards must not be empty";

    if (deck.length <= 0) {
        throw "No hay mas cartas en el deck";
    }
    return deck.pop();
}