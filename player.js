





// class for player
class Player {
    constructor() {
        this.name;
        this.level;
    }

    //function for playing next
    play = (table = new TableDeck(), playFromDeck, playFromHand1) => {
        
        //check if the full deck is empty;
        if (table.fullDeck.cards.length > 0) {
            // the deck is still full
            playFromDeck();

        } else {
            // the deck is empty
            // check if table is empty
            if (table.table.cards.length > 0) {
                //table is not empty
                let tableCard = table.table.cards[table.table.cards.length - 1];
                let i = 0;
                let length = table.player1h.cards.length;
                let handCard;
                let flag = false;
                let position = 0;

                // check for a card that i can play or just play the first card
                for (i; i < length; i++) {
                    //
                    handCard = table.player1h.cards[i];
                    // check if they are not the same
                    if (handCard.shape != tableCard.shape) {
                        // the shapes are not the same
                        flag = true;
                        position = i;
                        break;
                    }
                }

                if (!flag) {
                    position = 0;
                }

                playFromHand1(position);
            } else {
                // the table is empty
                playFromHand1(0);
            }
        }
    }
}