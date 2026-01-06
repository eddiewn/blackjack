import { CardDeck } from './CardDeck.js'
import { Player } from './Player.js'

export class Game{
    constructor(){
        this.deck = new CardDeck();
        this.turnId = 0;
        this.dealer = new Player('Dealer', 99);
        this.players = [];
        for (let index = 0; index < 3; index++) {
            this.players.push(new Player (`Player${index}`, index));
        }
    }

    start(){
        this.deck.createDeck();

        for (let index = 0; index < (this.players.length); index++) {
            for (let j = 0; j < 2; j++) {
                this.dealCard(this.players[index]);
            }
        }
        
        for (let j = 0; j < 2; j++) {
            this.dealCard(this.dealer);
        }

        this.turnId = 0;
        console.log(this.dealer);
        console.log(this.players);
    }

    dealCard(player){
        const card = this.deck.removeCard();
        if(player.id === 99) {
            this.dealer.getCard(card)
            return;
        }
        this.players[player.id].getCard(card)
    }

    playerHit(player){
        console.log(`HIT: ${player.name}`);
        this.dealCard(player)
    }

    playerStand(player){
        console.log(`STAND: ${player.name}`);
        this.turnId++;

        if(this.turnId >= this.players.length){
            this.dealerTurn()
        }
    }

    playerDoubleDown(player){
        console.log(`DOUBLE DOWN: ${player.name}`);
        this.dealCard(player);
        this.calculateBust(player);
        this.turnId++;
        if(this.turnId >= this.players.length){
            this.dealerTurn()
        }
    }

    calculateBust(player){
        const sum = player.cards.reduce((acc, card) => acc + card.value, 0);
        if(sum > 21){
            console.log(`${player.name} Busts!`);
            this.turnId++;
        }

        if(this.turnId >= this.players.length){
            this.dealerTurn()
        }
    }

    dealerTurn(){
        const sum = this.dealer.cards.reduce((acc, card) => acc + card.value, 0);
        console.log(`Dealer's turn. Start sum: ${sum}`);
        while(sum < 17){
            this.dealCard(this.dealer);
            const newSum = this.dealer.cards.reduce((acc, card) => acc + card.value, 0);
            console.log(`Dealer's turn. Current sum: ${newSum}`);
            if(newSum >= 17){
                break;
            }
        }

        this.calculateGameOutcome();
    }

    calculateGameOutcome(){
        const dealerSum = this.dealer.cards.reduce((acc, card) => acc + card.value, 0);
        console.log(`Dealer's final sum: ${dealerSum}`);

        this.players.forEach(player => {
            const playerSum = player.cards.reduce((acc, card) => acc + card.value, 0);
            if(playerSum > 21){
                console.log(`${player.name} busts and loses.`);
            } else if (dealerSum > 21 || playerSum > dealerSum){
                console.log(`${player.name} wins!`);
            } else if (playerSum < dealerSum){
                console.log(`${player.name} loses.`);
            } else {
                console.log(`${player.name} pushes (tie).`);
            }
        });
    }
};

