
export class Player {
    constructor(name, id){
        this.id = id;
        this.name = name;
        this.cards = [];
    }

    getCard(card){
        this.cards.push(card)
    }
}