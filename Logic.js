import { Game } from './game.js';

let game = new Game();
game.start();

const hitButton = document.getElementById("hit-button");

hitButton.addEventListener("click", () => {
    let currentPlayer = game.players[game.turnId];
    game.playerHit(currentPlayer);
    console.log(currentPlayer);
    game.turnId++;
});
