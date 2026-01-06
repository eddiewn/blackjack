import { Game } from './Game.js';

let game = new Game();
game.start();


const hitButton = document.getElementById("hit-button");
const standButton = document.getElementById("stand-button");
const doubleDownButton = document.getElementById("double-down-button");

standButton.addEventListener("click", () => {
    let currentPlayer = game.players[game.turnId];

    game.playerStand(currentPlayer);
});

hitButton.addEventListener("click", () => {
    let currentPlayer = game.players[game.turnId];

    game.playerHit(currentPlayer);
    game.calculateBust(currentPlayer);
});

doubleDownButton.addEventListener("click", () => {
    let currentPlayer = game.players[game.turnId];

    game.playerDoubleDown(currentPlayer);
});