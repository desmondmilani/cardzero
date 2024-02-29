




// class for card
class Card {
    constructor(number, shape, image = "") {
        this.number = number;
        this.shape = shape;
        this.image = image;
    }
}

// class for deck
class Deck {
    constructor() {
        this.cards = [];
    }
}

// class for table decks
class TableDeck {
    constructor() {
        this.fullDeck = new Deck();
        this.player1h = new Deck();
        this.table = new Deck();
        this.player2h = new Deck();
    }

    // function to create 52 cards
    create52Cards = () => {
        let cards = [];

        // create all cards
        let i = 1;
        let length = 13;

        for (i; i <= length; i++) {
            let path = "./images/";

            let image = i + "h.png";
            if (i == 11) {
                image = "jh.png"
            }
            if (i == 12) {
                image = "qh.png"
            }
            if (i == 13) {
                image = "kh.png"
            }

            
            let cardH = new Card(i, "heart", path + image);
            image = i + "s.png";
            if (i == 11) {
                image = "js.png"
            }
            if (i == 12) {
                image = "qs.png"
            }
            if (i == 13) {
                image = "ks.png"
            }
            let cardS = new Card(i, "spade", path + image);
            image = i + "c.png";
            if (i == 11) {
                image = "jc.png"
            }
            if (i == 12) {
                image = "qc.png"
            }
            if (i == 13) {
                image = "kc.png"
            }
            let cardC = new Card(i, "club", path + image);
            image = i + "d.png";
            if (i == 11) {
                image = "jd.png"
            }
            if (i == 12) {
                image = "qd.png"
            }
            if (i == 13) {
                image = "kd.png"
            }
            let cardD = new Card(i, "diamond", path + image);

            cards.push(cardH);
            cards.push(cardS);
            cards.push(cardC);
            cards.push(cardD);
        }

        this.fullDeck.cards = cards;
    }

    // function to shuffle cards
    shuffleCards = () => {
        let i = 0;
        let length = 52;
        let list = [];

        for (i; i < length; i++) {
            let r = Math.floor(Math.random() * 52);
            let flag = true;

            while (flag) {
                r = Math.floor(Math.random() * 52);
                if (valueInList(r, list)) {
                    flag = true;
                } else {
                    flag = false;
                }
            }

            list.push(r);
        }

        let cards = [];
        i = 0;

        for (i; i < length; i++) {
            cards.push(this.fullDeck.cards[list[i]]);
        }

        this.fullDeck.cards = cards;
    }
}


// function to check if value is in the list
const valueInList = (value, list) => {
    let flag = false;
    let i = 0;
    let length = list.length;

    for (i; i < length; i++) {
        if (value == list[i]) {
            flag = true;
            break;
        }
    }

    return flag;
}


///// testing 

