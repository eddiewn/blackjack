import { CardDeck } from './CardDeck.js'
import { Player } from './Player.js'

export class Game{
    constructor(){
        this.deck = new CardDeck();
        this.turnId = 0;
        this.dealer = new Player('Dealer');
        this.players = [];
        for (let index = 0; index < 3; index++) {
            this.players.push(new Player ("Player", index));
        }
    }

    start(){
        this.deck.createDeck();

        for (let index = 0; index < (this.players.length); index++) {
            for (let j = 0; j < 2; j++) {
                this.dealCard(this.players[index]);
            }
        }
        this.turnId = 0;
        console.log(this.players);
    }

    dealCard(player){
        let card = this.deck.removeCard();
        this.players[player.id].getCard(card)
    }

    playerHit(player){
        this.dealCard(player)
    }

    calculateBust(player){
        
    }
}


