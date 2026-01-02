export class CardDeck {
    constructor() {
        this.cards = [];
    }

    createDeck() {
        const suits = ['H', 'D', 'C', 'S'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                this.cards.push(`${suits[i]}${values[j]}`)
            }
            
        }
        console.log(this.cards)
    }

    addCard(card) {
        this.cards.push(card);
    }   
    
    removeCard(card) {
        const index = this.cards.indexOf(card);
        if (index > -1) {
            this.cards.splice(index, 1);
        }
    }
}