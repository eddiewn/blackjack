export class CardDeck {
    constructor() {
        this.cards = [];
        this.discarded = [];
    }

    createDeck() {
        const suits = ["Heart", "Diamond", "Club", "Spade"];
        const values = [
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King",
            "Ace",
        ];

        function getValue(value){
            if(["Jack", "Queen", "King"].includes(value)) return 10;
            if(["Ace"].includes(value)) return 11;
            return Number(value);
        }

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                this.cards.push({
                    name: (suits[i] + values[j]),
                    value: getValue(values[j]),
                });
            }
        }
        this.shuffle(this.cards);
        console.log(this.cards);
    }

    shuffle = (array) => {
        for (let i = array.length - 1; i >= 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            array.push(array[randomIndex]);
            array.splice(randomIndex, 1);
        }
        return array;
    };

    discard(card) {
        this.discarded.push(card);
    }

    removeCard(card) {
        const index = this.cards.indexOf(card);
        if (index > -1) {
            this.cards.splice(index, 1);
        }
    }
}
