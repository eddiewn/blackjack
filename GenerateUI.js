const generateUI = () => {
    const gameContainer = document.createElement('div');
    gameContainer.id = 'game-container';    
    document.body.appendChild(gameContainer);

    const playerArea = document.createElement('div');
    playerArea.id = 'player-area';
    gameContainer.appendChild(playerArea);


    const dealerArea = document.createElement('div');
    dealerArea.id = 'dealer-area';
    gameContainer.appendChild(dealerArea);

    const hitButton = document.createElement('button');
    hitButton.id = 'hit-button';
    hitButton.innerText = 'Hit';
    gameContainer.appendChild(hitButton);

    const standButton = document.createElement('button');
    standButton.id = 'stand-button';
    standButton.innerText = 'Stand';
    gameContainer.appendChild(standButton);

    const doubleDownButton = document.createElement('button');
    doubleDownButton.id = 'double-down-button';
    doubleDownButton.innerText = 'Double Down';
    gameContainer.appendChild(doubleDownButton);
};

generateUI();