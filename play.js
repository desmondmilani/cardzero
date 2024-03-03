





// class to hold user information
class User {
    constructor(name, wins = 0, loses = 0, challenger = "Paris Makhadi"){
        this.name = name;
        this.wins = wins;
        this.loses = loses;
        this.challenger = challenger;
    }
}

// get the user

let user = JSON.parse(localStorage.getItem("czuser"));

if (user == null) {
    let czUser = new User("Player 2", 0, 0);

    let strUser = JSON.stringify(czUser);

    localStorage.setItem("czuser", strUser);
    user = JSON.parse(localStorage.getItem("czuser"));
}

///////////// OPONENT TABLE //////////////////

//container for the entire a page
let container = DesLayout.createSimple("container");
DesStyle.addClass(container, "container");

// add container to body
DesTag.addToParent(container, document.body);

// select content space from the container
let contentBox = DesTag.getTagBYId("container0");
DesStyle.addClass(contentBox, "contentBox");

// heading for the challenger page
let heading = DesTag.createTag("h1");
heading.innerText = "Select Your Opponent";
DesTag.addToParent(heading, contentBox);

// space for username and to edit user name
let nameDiv = DesTag.createTag("div");
DesTag.addToParent(nameDiv, contentBox);
DesStyle.addClass(nameDiv, "nameDiv");

// add a label for name
let lblName = DesTag.createTag("label");
lblName.innerText = "Your name";
DesTag.addToParent(lblName, nameDiv);

// add text box for name
let txtName = DesTag.createTag("input");
txtName.value = user.name;
DesTag.addToParent(txtName, nameDiv);

// add button to change name
let btnChangeName = DesTag.createTag("input");
btnChangeName.value = "Change your name";
btnChangeName.type = "button";
DesStyle.addClass(btnChangeName, "btnChangeName");
DesTag.addToParent(btnChangeName, nameDiv);
btnChangeName.addEventListener("click", () => {
    let strName = txtName.value;
    if (strName == "") {
        strName = "Player 2";
    }

    user.name = strName;
    localStorage.setItem("czuser", JSON.stringify(user));
    user = JSON.parse(localStorage.getItem("czuser"))
    txtName.value = user.name;
    playerName.innerText = user.name;
    alert("Name changed to " + user.name);

});

// the div for opponents
let opponentDiv = DesTag.createTag("div");
DesTag.addToParent(opponentDiv, contentBox);
DesStyle.addClass(opponentDiv, "opponentDiv");



// the first opponent
let op1 = DesTag.createTag("div");
let img1 = DesTag.createTag("img");
img1.src = "./images/child.png";
let name1 = DesTag.createTag("h2");
name1.innerText = "Paris Makhadi";
DesTag.addToParent(op1, opponentDiv);
op1.addEventListener("click", () => {
    opponentDescription.innerText = "Paris Makhadi is a daughter of Marriam and Gavin";
    user.challenger = "Paris Makhadi";
    txtModal.innerText = user.challenger + " is thinking...";
});
DesTag.addToParent(img1, op1);
DesTag.addToParent(name1, op1);



// the second opponent
let op2 = DesTag.createTag("div");
let img2 = DesTag.createTag("img");
img2.src = "./images/father.jpg"
let name2 = DesTag.createTag("h2");
name2.innerText = "Gavin Makhadi";
DesTag.addToParent(op2, opponentDiv);
op2.addEventListener("click", () => {
    opponentDescription.innerText = "Gavin Makhadi is a husband to Marriam and father to Paris.";
    user.challenger = "Gavin Makhadi";
    txtModal.innerText = user.challenger + " is thinking...";
});
DesTag.addToParent(img2, op2);
DesTag.addToParent(name2, op2);


// the third opponent
let op3 = DesTag.createTag("div");
let img3 = DesTag.createTag("img");
img3.src = "./images/mother.jpg";
let name3 = DesTag.createTag("h2");
name3.innerText = "Marriam Makhadi";
DesTag.addToParent(op3, opponentDiv);
op3.addEventListener("click", () => {
    opponentDescription.innerText = "Marriam Makhadi is a mother to Paris and wife to Gavin.";
    user.challenger = "Marriam Makhadi";
    txtModal.innerText = user.challenger + " is thinking...";
});
DesTag.addToParent(img3, op3);
DesTag.addToParent(name3, op3);

// the description of the player
let opponentDescription = DesTag.createTag("p");
opponentDescription.innerText = "The description of the opponent";
DesTag.addToParent(opponentDescription, contentBox);
DesStyle.addClass(opponentDescription, "opponentDescription");

// button to challenge
let btnChallenge = DesTag.createTag("input");
btnChallenge.type = "button";
btnChallenge.value = "Challenge";
DesTag.addToParent(btnChallenge, contentBox);
DesStyle.addClass(btnChallenge, "btnChallenge");
btnChallenge.addEventListener("click", () => {
    container.style.display = "none";
    container1.style.display = "flex";
    opponentName.innerText = user.challenger;
    startGame();
    
});


/////////////// GAME TABLE ////////////////////////////
// container for the actual game
let container1 = DesLayout.createSimple("container1");
DesStyle.addClass(container1, "container");
DesStyle.addClass(container1, "container1");

// add container to body
DesTag.addToParent(container1, document.body);

// select content space from the container
let contentBox1 = DesTag.getTagBYId("container10");
DesStyle.addClass(contentBox1, "contentBox");

// div for match details
let detailDiv = DesTag.createTag("div");
DesTag.addToParent(detailDiv, contentBox1);
DesStyle.addClass(detailDiv, "detailDiv");

//create opponent div for the details
let playerDiv1 = DesTag.createTag("div");
DesTag.addToParent(playerDiv1, detailDiv);
DesStyle.addClass(playerDiv1, "playerDiv");

// create opponent name tag
let opponentName = DesTag.createTag("h3");
opponentName.innerText = user.challenger;
DesTag.addToParent(opponentName, playerDiv1);

// create a tag that will hold the number of cards the opponent have
let opponentCount = DesTag.createTag("h3");
opponentCount.innerText = 0;
DesTag.addToParent(opponentCount, playerDiv1);

//create player div for the details
let playerDiv2 = DesTag.createTag("div");
DesTag.addToParent(playerDiv2, detailDiv);
DesStyle.addClass(playerDiv2, "playerDiv");

// create opponent name tag
let playerName = DesTag.createTag("h3");
playerName.innerText = user.name;
DesTag.addToParent(playerName, playerDiv2);

// create a tag that will hold the number of cards the opponent have
let playerCount = DesTag.createTag("h3");
playerCount.innerText = 0;
DesTag.addToParent(playerCount, playerDiv2);

//create space for opponents cards
let opponentDeck = DesTag.createTag("div");
DesTag.addToParent(opponentDeck, contentBox1);
DesStyle.addClass(opponentDeck, "playerDeck")

//create space for table
let fullTable = DesLayout.createSimple("table", 2);
DesTag.addToParent(fullTable, contentBox1);
DesStyle.addClass(fullTable, "fullTable");

// create space for full deck cards
let fullDeck = DesTag.getTagBYId("table0");
DesTag.addToParent(fullDeck, fullTable);
DesStyle.addClass(fullDeck, "tableDeck");


// create space for open deck cards
let openDeck = DesTag.getTagBYId("table1");
DesTag.addToParent(openDeck, fullTable);
DesStyle.addClass(openDeck, "tableDeck");

// create space for player cards
let playerDeck = DesTag.createTag("div");
DesTag.addToParent(playerDeck, contentBox1);
DesStyle.addClass(playerDeck, "playerDeck")


// function that will start the game
const startGame = () => {
    table = new TableDeck();
    table.create52Cards();
    table.shuffleCards();
    player1Count = 0;
    player2Count = 0;
    currentPlayer = user.challenger;
    if (user.challenger == "Marriam Makhadi") {
        player = new Player2();
    } else {
        player = new Player1();
    }
    gameOver = false;
    displayAllDecks();
    computerPlay();
}

// function to switch player
const switchPlayer = () => {
    if (currentPlayer == user.challenger) {
        currentPlayer = user.name;
    } else {
        currentPlayer = user.challenger;
    }
}

// function to clear
const clearAllDeck = () => {
    fullDeck.innerHTML = "";
    openDeck.innerHTML = "";
    opponentDeck.innerHTML = "";
    playerDeck.innerHTML = "";
}
// function to display
const displayAllDecks = () => {
    //clear everything first
    clearAllDeck();
    // display full deck
    displayFullDeck();
    displayTableDeck();
    displayOpponentDeck();
    displayPlayerDeck();
    opponentCount.innerText = table.player1h.cards.length;
    playerCount.innerText = table.player2h.cards.length + " -- Score: " + user.score;
}

// opponent deck
const displayOpponentDeck = () => {
    // check if opponent have cards
    let length = table.player1h.cards.length;
    if (length > 0) {
        let i = 0;
        for (i; i < length; i++) {
            let card = DesTag.createTag("img");
            card.src = "./images/cardbg.png";
            DesTag.addToParent(card, opponentDeck);
            DesStyle.addClass(card, "card");
        }
    }
}
// opponent deck
const displayPlayerDeck = () => {
    // check if opponent have cards
    let length = table.player2h.cards.length;
    if (length > 0) {
        let i = 0;
        for (i; i < length; i++) {
            let card = DesTag.createTag("img");
            card.src = table.player2h.cards[i].image;
            card.id = i;
            DesTag.addToParent(card, playerDeck);
            card.addEventListener("click", (e) => {
                playFromHand(e.target.id);
                checkWinner();
            });
            DesStyle.addClass(card, "card");
        }
    }
}

// function for computer to play
const computerPlay = () => {
    modal.style.display = "flex";

    if (currentPlayer == user.name) {
        modal.style.display = "none";
        return;
    }

    setTimeout(() => {
        
        player.play(table, playFromDeck, playFromHand);
        modal.style.display = "none";
    }, 1000);
    
}

// display table deck
const displayTableDeck = () => {
    // check if full deck is not empty
    if (table.table.cards.length > 0) {
        let image = table.table.cards[table.table.cards.length - 1].image;
        let card = DesTag.createTag("img");
        card.src = image;
        DesTag.addToParent(card, openDeck);
        DesStyle.addClass(card, "card");
    }
}

// function to display fulldeck
const displayFullDeck = () => {
    // check if full deck is not empty
    if (table.fullDeck.cards.length > 0) {
        let image = "./images/cardbg.png";
        let card = DesTag.createTag("img");
        card.src = image;
        DesTag.addToParent(card, fullDeck);
        card.addEventListener("click", () => {
            playFromDeck();
        });
        DesStyle.addClass(card, "card");
    }
}

// function to play from deck
const playFromDeck = () => {

    if (user.challenger == "Marriam Makhadi") {
    }
    let card = table.fullDeck.cards[table.fullDeck.cards.length - 1];

    // check if the table deck is empty
    let tableLength = table.table.cards.length;
    let fullLength = table.fullDeck.cards.length;

    if (tableLength > 0) {
        // check if the table card is same as chosen card
        let card2 = table.table.cards[tableLength - 1];

        if (card.shape == card2.shape) {
            //the shapes are the same
            // check which user is playing
            if (currentPlayer == user.name) {
                //the player taken the cards
                let text = user.name + " took " + (tableLength + 1) + " cards";
                alert(text);
                table.player2h.cards.push(card);
                let i = 0;

                for (i; i < tableLength; i++) {
                    table.player2h.cards.push(table.table.cards[i]);
                }

                table.table.cards = [];
                table.fullDeck.cards.splice(fullLength - 1, 1);
                displayAllDecks();
            } else {
                //the computer taken the cards
                let text = user.challenger + " took " + (tableLength + 1) + " cards";
                alert(text);
                table.player1h.cards.push(card);
                for (let i = 0; i < tableLength; i++) {
                    table.player1h.cards.push(table.table.cards[i]);
                }

                table.table.cards = [];
                table.fullDeck.cards.splice(fullLength - 1, 1);
                displayAllDecks();
            }
        } else {
            // the cards are not the same
            table.table.cards.push(card);
            table.fullDeck.cards.splice(fullLength - 1, 1);
            switchPlayer();
            displayAllDecks();
        }
    } else {
        //there are no cards on the table
        table.table.cards.push(card);
        table.fullDeck.cards.splice(fullLength - 1, 1);
        switchPlayer();
        displayAllDecks();
    }

    computerPlay();
    
    checkWinner();
}

// function to play from player hand
const playFromHand = (cardPosition) => {

    if (table.fullDeck.cards.length > 0) {
        alert("Please play from deck first");
        return;
    }

    let card;
    // select the card based on the current player
    if (currentPlayer == user.name) {
        card = table.player2h.cards[cardPosition];
    } else {
        card = table.player1h.cards[cardPosition];
    }

    // check if the table is empty
    let tableLength = table.table.cards.length;
    if (tableLength > 0) {
        // the cards exist
        // check if the cards are the same
        let card2 = table.table.cards[tableLength - 1];

        if (card.shape == card2.shape) {
            //the shapes are the same
            let i = 0;
            for (i; i < tableLength; i++) {
                // check player before giving out cards
                if (currentPlayer == user.name) {
                    // cards to player
                    table.player2h.cards.push(table.table.cards[i]);
                } else {
                    // cards to opponent
                    table.player1h.cards.push(table.table.cards[i]);
                }
            }

            if (currentPlayer == user.name) {
                if (user.challenger = "Marriam Makhadi") {
                    player.reChooseShape();
                }
                alert(user.name + " took " + (table.table.cards.length) + " cards");
            } else {
                alert(user.challenger + " took " + (table.table.cards.length) + " cards");
            }

            table.table.cards = [];
            
            displayAllDecks();
        } else {
            // shapes are not the same
            table.table.cards.push(card);

            // remove card based on player
            if (currentPlayer == user.name) {
                //remove from player
                table.player2h.cards.splice(cardPosition, 1);
            } else {
                //remove from opponent
                table.player1h.cards.splice(cardPosition, 1);
            }
            switchPlayer();
            displayAllDecks();
        }
    } else {
        // there are no cards
        table.table.cards.push(card);

        // remove card base on player
        if (currentPlayer == user.name) {
            // player
            table.player2h.cards.splice(cardPosition, 1);
        } else {
            // opponent
            table.player1h.cards.splice(cardPosition, 1);
        }

        switchPlayer();
        displayAllDecks();
    }
    computerPlay();
    checkWinner();
}

// function to check winner
const checkWinner = () => {
    // check if full deck is empty
    let deckLength = table.fullDeck.cards.length;
    let playerLength = table.player2h.cards.length;
    let opponentLength = table.player1h.cards.length;

    if (deckLength < 1) {
        // check which player has no cards
        if (playerLength < 1) {
            // check if player won
            if (opponentLength > 0) {
                //player won
                let strWin = "The winner is " + user.name + ", congratulations to you!";
                
                winnerModal.style.display = "flex";
                imgResult.src = "./images/win.jpg";
                txtResult.innerText = strWin;
                winnerModal.style.display = "flex";

                if (user.challenger == "Marriam Makhadi") {
                    user.score += 5;
                } else if (user.challenger == "Gavin Makhadi") {
                    user.score += 3;
                } else {
                    user.score += 1;
                }

                if(!gameOver) {
                    user.wins += 1;
                    localStorage.setItem("czuser", JSON.stringify(user));
                    gameOver = true;
                }

            }
        } else if (opponentLength < 1) {
            // check opponent
            if (playerLength > 0) {
                // computer won
                let strLose = "The winner is " + user.challenger + ", you lost, better luck next time.";
                
                winnerModal.style.display = "flex";
                imgResult.src = "./images/lose.png";
                txtResult.innerText = strLose;
                winnerModal.style.display = "flex";

                if (!gameOver) {
                    if (user.challenger == "Marriam Makhadi") {
                        user.score -= 1;
                    } else if (user.challenger == "Gavin Makhadi") {
                        user.score -= 2;
                    } else {
                        user.score -= 2;
                    }
    
                    user.loses -= 1;

                    gameOver = true;
                    localStorage.setItem("czuser", JSON.stringify(user));
                }
            }
        }
    }

}

// create modal for computer
let modal = DesTag.createTag("div");
DesTag.addToParent(modal, document.body);
DesStyle.addClass(modal, "modal");

// text for modal
let txtModal = DesTag.createTag("h4");
txtModal.innerText = user.challenger + " is still thinking...";
DesTag.addToParent(txtModal, modal);

// create window for winners
let winnerModal = DesTag.createTag("div");
DesTag.addToParent(winnerModal, document.body);
DesStyle.addClass(winnerModal, "winnerModal");

// image for victory or lose
let imgResult = DesTag.createTag("img");
DesTag.addToParent(imgResult, winnerModal);
DesStyle.addClass(imgResult, "imgResult");


// text for victory or lose
let txtResult = DesTag.createTag("p");
DesTag.addToParent(txtResult, winnerModal);
txtResult.innerText = "The winner is..."

// button
let btnPlayAgain = DesTag.createTag("input");
DesTag.addToParent(btnPlayAgain, winnerModal);
DesStyle.addClass(btnPlayAgain, "btnResult");
btnPlayAgain.type = "button";
btnPlayAgain.value = "Play Again";
btnPlayAgain.addEventListener("click", () => {
    winnerModal.style.display = "none";
    startGame();
});

let btnChooseOpponent = DesTag.createTag("input");
DesTag.addToParent(btnChooseOpponent, winnerModal);
DesStyle.addClass(btnChooseOpponent, "btnResult");
btnChooseOpponent.type = "button";
btnChooseOpponent.value = "Choose another opponent";
btnChooseOpponent.addEventListener("click", () => {
    container.style.display = "flex";
    container1.style.display = "none";
    winnerModal.style.display = "none";
});

// the game starts here
let table = new TableDeck();
let player = new Player1();
let currentPlayer = "";
let gameOver = false;
