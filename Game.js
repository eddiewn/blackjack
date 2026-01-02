import { CardDeck } from './CardDeck.js'
import { Player } from './Player.js'

export class Game{
    constructor(){
        this.deck = new CardDeck();
        this.dealer = new Player('Dealer');
        this.player = new Player('Player');
    }

    start(){
        this.deck.createDeck();
    }

    dealCard(player){
        let card = this.deck.pop();
        player.getCard(card)
    }

    playerHit(player){
        this.dealCard(player)
    }

    calculateBust(player){
        
    }
}


