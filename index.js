





//////////////// UI ////////////////////
// container
let container = DesTag.createTag("div");
container.id = "container";

DesStyle.addClass(container, "des-container");
DesTag.addToParent(container, document.body);

// for player messeges
let modal = DesTag.createTag("div");
let modalText = DesTag.createTag("h1");

DesTag.addToParent(modalText, modal);
DesTag.addToParent(modal, document.body);

modalText.innerText = "Player 1 Thinking.........";

DesStyle.addClass(modal, "modal");
modal.style.display = "none";

//////////////// LAYOUT /////////////////
//Creating the layout
let layout = DesLayout.createSimple("game", 2);
DesTag.addToParent(layout, container);

// select boxes from layout
let box = DesTag.getTagBYId("game");
let box1 = DesTag.getTagBYId("game0");
let box2 = DesTag.getTagBYId("game1");

// add styles to boxes
DesStyle.addClass(box, "des-box");
DesStyle.addClass(box1, "des-box0");
DesStyle.addClass(box2, "des-box1");

// create player1 space
let player1Layout = DesLayout.createSimple("p1", 2);
DesStyle.addClass(player1Layout, "player");
DesTag.addToParent(player1Layout, box1);
let p1t = DesTag.getTagBYId("p10");
DesStyle.addClass(p1t, "playert");

let p1h = DesTag.getTagBYId("p11");
DesStyle.addClass(p1h, "playerh");

let tableLayout = DesLayout.createSimple("t", 2);
DesStyle.addClass(tableLayout, "table");
DesTag.addToParent(tableLayout, box1);

let t1 = DesTag.getTagBYId("t0");
DesStyle.addClass(t1, "table-card");
let t2 = DesTag.getTagBYId("t1");
DesStyle.addClass(t2, "table-card");

let player2Layout = DesLayout.createSimple("p2", 2);
DesStyle.addClass(player2Layout, "player");
DesTag.addToParent(player2Layout, box1);
let p2t = DesTag.getTagBYId("p20");
DesStyle.addClass(p2t, "playert");

let p2h = DesTag.getTagBYId("p21");
DesStyle.addClass(p2h, "playerh");

// box 2 content
let lblPlayer1Cards = DesTag.createTag("h3");
let lblPlayer2Cards = DesTag.createTag("h3");
let lblFullDeck = DesTag.createTag("h3");
let lblTable = DesTag.createTag("h3");
let lblCurrentPlayer = DesTag.createTag("h3");

DesTag.addToParent(lblFullDeck, box2);
DesTag.addToParent(lblTable, box2);
DesTag.addToParent(lblPlayer1Cards, box2);
DesTag.addToParent(lblPlayer2Cards, box2);
DesTag.addToParent(lblCurrentPlayer, box2);

// function to change player
const changePlayer = () => {
    checkWinner();
    if (currentPlayer == "player1") {
        currentPlayer = "player2";
    } else {
        currentPlayer = "player1";
    }

    
}


// connecting code
// function to take from deck
const playFromDeck = () => {
    //check the cards in the deck
    let card = table.fullDeck.cards[table.fullDeck.cards.length - 1];

    if (table.table.cards.length > 0) {
        let secondCard = table.table.cards[table.table.cards.length - 1];

        // check if the shapes are the same
        if (card.shape == secondCard.shape) {
            table.table.cards.push(card);
            table.fullDeck.cards.splice(table.fullDeck.cards.length -1, 1);

            let i = 0;
            let length = table.table.cards.length;

            
            // the player must take the cards
            if (currentPlayer == "player1") {
                //cards goes to player1
                for (i; i < length; i++) {
                    table.player1h.cards.push(table.table.cards[i]);
                }

                table.table.cards = [];
            } else {
                //cards goes to player2
                for (i; i < length; i++) {
                    table.player2h.cards.push(table.table.cards[i]);
                }

                table.table.cards = [];
            }
        } else {
            table.table.cards.push(card);
            table.fullDeck.cards.splice(table.fullDeck.cards.length -1, 1);
            changePlayer();
        }
    } else {
        table.table.cards.push(card);
        table.fullDeck.cards.splice(table.fullDeck.cards.length -1, 1);
        changePlayer();
    }

    clearCards();
    displayCards();

    if (currentPlayer == "player1") {
        modal.style.display = "flex";
        setTimeout(() => {
            player.play(table, playFromDeck, playFromHand1);
            if (currentPlayer == "player2") {
                modal.style.display = "none";
            }
    
        }, 1000);  
    }
}

// function to play from player1 hand
const playFromHand1 = (position) => {
    
    // check if the full deck is out
    if (table.fullDeck.cards.length > 0) {
        alert("Play from the table deck");
        return;
    } else {
        // good to go
        //check if player 1 is playing this card
        if (currentPlayer == "player1") {
            //good to go
            // check if the table is empty
            if (table.table.cards.length <= 0) {
                //nothing
                let card = table.player1h.cards[position];
                table.table.cards.push(card);
                table.player1h.cards.splice(position, 1);
                changePlayer();
            } else {
                //there is something
                // check if the shapes are the same
                let card = table.player1h.cards[position];
                let secondCard = table.table.cards[table.table.cards.length - 1];

                if (card.shape == secondCard.shape) {
                    // shapes are the same
                    // give player 1 the cards
                    let i = 0;
                    let length = table.table.cards.length;

                    for(i; i < length; i++) {
                        table.player1h.cards.push(table.table.cards[i]);
                    }

                    table.table.cards = [];
                    if (currentPlayer == "player1") {
                        modal.style.display = "flex";
                            setTimeout(() => {
                                player.play(table, playFromDeck, playFromHand1);
                                    if (currentPlayer == "player2") {
                                        modal.style.display = "none";
                                }
    
                            }, 1000);  
                }
                    
                } else {
                    // shapes are not the same
                    table.table.cards.push(card);
                    table.player1h.cards.splice(position, 1);
                    changePlayer();
                }
            }
        } else {
            alert("Please play your own cards");
        }
    }

    clearCards();
    displayCards();
}

const playFromHand2 = (position) => {
    // check if the full deck is out
    if (table.fullDeck.cards.length > 0) {
        alert("Play from the table deck");
        return;
    } else {
        // good to go
        //check if player 2 is playing this card
        if (currentPlayer == "player2") {
            //good to go
            // check if the table is empty
            if (table.table.cards.length <= 0) {
                //nothing
                let card = table.player2h.cards[position];
                table.table.cards.push(card);
                table.player2h.cards.splice(position, 1);
                changePlayer();
            } else {
                //there is something
                // check if the shapes are the same
                let card = table.player2h.cards[position];
                let secondCard = table.table.cards[table.table.cards.length - 1];

                if (card.shape == secondCard.shape) {
                    // shapes are the same
                    // give player 1 the cards
                    let i = 0;
                    let length = table.table.cards.length;

                    for(i; i < length; i++) {
                        table.player2h.cards.push(table.table.cards[i]);
                    }

                    table.table.cards = [];
                } else {
                    // shapes are not the same
                    table.table.cards.push(card);
                    table.player2h.cards.splice(position, 1);
                    changePlayer();
                }
            }
        } else {
            alert("Please play your own cards");
        }
    }


    clearCards();
    displayCards();

    if (currentPlayer == "player1") {
        modal.style.display = "flex";
        setTimeout(() => {
            player.play(table, playFromDeck, playFromHand1);
            if (currentPlayer == "player2") {
                modal.style.display = "none";
            }
    
        }, 1000);  
    }
}

//function to check the winner
const checkWinner = () => {
    
    if (table.fullDeck.cards.length <= 0) {
        if (table.player1h.cards.length <= 0) {
            
            //player 1 maybe won
            if (table.player2h.cards.length > 0) {
                //player 1 won
                gameOver = true;
                alert("Player 1 won");
            }
        } else if(table.player2h.cards.length <= 0) {
            //player 2 maybe won
            if (table.player1h.cards.length > 0) {
                //player 2 won
                gameOver = true;
                alert("Player 2 won");
            }
        }
    }
}

// function to display the cards
const displayCards = () => {
    // display full deck
    if (table.fullDeck.cards.length > 0) {
        // cards available
        let image = DesTag.createTag("img");
        image.src = "./images/cardbg.png";
        image.addEventListener("click", playFromDeck);
        DesTag.addToParent(image, t1);
    } else {
        // no cards
        let image = DesTag.createTag("img");
        image.src = "./images/cardempty.png";
        DesTag.addToParent(image, t1);
    }

    //display table deck
    if (table.table.cards.length > 0) {
        let image = DesTag.createTag("img");
        image.src = table.table.cards[table.table.cards.length - 1].image;
        
        DesTag.addToParent(image, t2);
    }

    // display card for player1
    let i =0;
    let length = table.player1h.cards.length;
    for (i; i < length; i++) {
        let image = DesTag.createTag("img");
        image.src = "./images/cardbg.png";
        image.id = i;
        DesTag.addToParent(image, p1h);
        image.addEventListener("click", (e) => {
            playFromHand1(e.target.id);
        });
    }
    // display card for player2
    i =0;
    length = table.player2h.cards.length;
    for (i; i < length; i++) {
        let image = DesTag.createTag("img");
        image.src = table.player2h.cards[i].image;
        image.id = i
        DesTag.addToParent(image, p2h);
        image.addEventListener("click", (e) => {
            playFromHand2(e.target.id);
        });
    }

    // display the labels
    lblFullDeck.innerText = "Full Deck: " + table.fullDeck.cards.length;
    lblTable.innerText = "Table Deck: " + table.table.cards.length;
    lblPlayer1Cards.innerText = "Player 1: " + table.player1h.cards.length;
    lblPlayer2Cards.innerText = "Player 2: " + table.player2h.cards.length;

    if (!gameOver) {
        lblCurrentPlayer.innerText = "Current Player: " + currentPlayer;
    }
}

//function to clear all cards
const clearCards = () => {
    p1h.innerHTML = "";
    p2h.innerHTML = "";
    t1.innerHTML = "";
    t2.innerHTML = "";
}

/////////////
let table = new TableDeck();
let player = new Player();
table.create52Cards();
table.shuffleCards();
let currentPlayer = "player1";
let gameOver = false;
displayCards();

if (currentPlayer == "player1") {
    modal.style.display = "flex";
    setTimeout(() => {
        player.play(table, playFromDeck, playFromHand1);
        if (currentPlayer == "player2") {
            modal.style.display = "none";
        }

    }, 1000);  
}




