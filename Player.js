
export class Player {
    constructor(name){
        this.name = name;
        this.cards = [];
    }

    getCard(card){
        this.cards.push(card)
    }
}