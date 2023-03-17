import _ from 'underscore';

/**
 * @param {Array<String>} deckTypes example: ["Clover", "Diamonds", "Hearts", "Spades"],
 * @param {Array<String>} deckSpecials example: ["As", "J", "K", "Queen"]
 * @returns return a new deck of cards
 */

export const createDeck = (deckTypes, deckSpecials) => {
    let deck = [];

    if (deckTypes.length === 0 || deckSpecials.length === 0) throw "Empty arrays are not accepted when creating the deck.";


    if (!deckTypes || !deckSpecials) throw "deckTypes y deckSpecials are required values for this function";


    for (let i = 2; i <= 10; i++) {
        for (let deckType of deckTypes) {
            deck.push(i + deckType);
            // console.log(i + deckType)
        }
    }
    for (let deckSpecial of deckSpecials) {
        for (let deckType of deckTypes) {
            deck.push(deckSpecial + deckType);
            // console.log(deckSpecial + deckType)
        }
    }
    return _.shuffle(deck);
}

