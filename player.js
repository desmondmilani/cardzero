





// Paris for player
class Player1 {
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

// parent player
class Player2 {
    constructor() {
        this.name;
        this.level;
        this.trapShape = chooseShape();
        this.limit = chooseLimit();
    }

    //function for playing next
    play = (table = new TableDeck(), playFromDeck, playFromHand1) => {
        
        // check if full deck is empty
        if (table.fullDeck.cards.length < 1) {
            let tableLength = table.table.cards.length;
            let playerLength = table.player1h.cards.length;
            let opponentLength = table.player2h.cards.length;
            let position = 0;

            // check if player is winning
            if (playerLength > opponentLength) {
                // opponent is winning
                // check the limit to play trap card
                if (opponentLength <= this.limit) {
                    // check if is safe to play trap card
                    let i = 0;
                    let flag = false;

                    for (i; i < playerLength; i++) {
                        if(table.player1h.cards[i].shape == this.trapShape) {
                            position = i;
                            flag = true;
                            break;
                        }
                    }

                    if (!flag) {
                        position = 0;
                    }

                    let trapCard = table.player1h.cards[position];
                    let tableCard = table.table.cards[tableLength - 1];

                    if (tableLength > 0) {
                        // ------------------------------
                        // check if they are the same
                        if (trapCard.shape == tableCard.shape) {
                            // change card
                            i = 0;
                            flag = false;
                            for (i; i < playerLength; i++) {
                                if (table.table.cards[i].shape != tableCard.shape) {
                                    position = i;
                                    flag = true;
                                    break;
                                }
                            }

                            if (!flag) {
                                position = playerLength - 1;
                            }

                            playFromHand1(position);
                        } else {
                            // play card
                            playFromHand1(position);
                        }
                        // -----------------------------
                    } else {
                        //play card
                        playFromHand1(position);
                    }


                    
                } else {
                    // don't play trap card
                    // ---------------------------
                    if (tableLength > 0) {
                        // look for a card (not on table and not trap card)

                        let i = 0;
                        let tableCard = table.table.cards[tableLength - 1];
                        let flag = false;

                    

                        for (i; i < playerLength; i++) {
                            if (table.player1h.cards[i].shape != tableCard.shape) {
                                position = i;
                                if (table.player1h.cards[i].shape != this.trapShape) {
                                    position = i;
                                    flag = true;
                                }

                                if (flag) {
                                    break;
                                }
                            
                            }
                        }

                        // if card not found choose any card but not trap card

                       

                        playFromHand1(position);
                    } else {
                        // the table is empty
                        // look for a card rather than trap card
                        let i = 0;
                        let flag = false;
                        
                        for (i; i < playerLength; i++) {
                            if (table.player1h.cards[i].shape != this.trapShape) {
                                position = i;
                                flag = true;
                                break;
                            }
                        }

                        

                        playFromHand1(position);
                    }
                    //---------------------------
                }
            } else {
                //opponent is losing
                // check if table is empty
                if (tableLength < 1) {
                    // table is empty
                    playFromHand1(position);
                } else {
                    // table has cards
                    // check for a card escape
                    let tableCard = table.table.cards[tableLength - 1];

                    let i = 0;
                    let flag = false;

                    for (i; i < playerLength; i++) {
                        if(tableCard.shape != table.player1h.cards[i].shape) {
                            //todo
                            position =i;
                            flag = true;
                            break;
                        }
                    }

                    if (!flag) {
                        position = 0;
                    }

                    playFromHand1(position);    
                }
            }

            
        } else {
            // the deck is full
            playFromDeck();
        }
    }

    reChooseShape = () => {
        let strChoose = this.trapShape;
        let strNew = chooseShape();
        let intNew = chooseLimit();

        while(strChoose == strNew) {
            strNew = chooseShape();
        }

        this.trapShape = strNew;
        this.limit = intNew;
    }
}


let shapes = ["spade", "heart", "club", "diamond"];

// function to choose shape
const chooseShape = () => {
    let r = Math.floor(Math.random() * 4);
    let shape = shapes[r];

    return shape;
}

//function to choose limi
const chooseLimit = () => {
    let r = Math.ceil(Math.random() * 7 + 4);
    return r;
}