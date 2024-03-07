




// class to hold user information
class User {
    constructor(name, wins = 0, loses = 0, challenger = "Paris Makhadi"){
        this.name = name;
        this.wins = wins;
        this.loses = loses;
        this.challenger = challenger;
        this.score = 0;
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

//container for the entire a page
let container = DesLayout.createSimple("container");
DesStyle.addClass(container, "container");

// add container to body
DesTag.addToParent(container, document.body);

// select content space from the container
let contentBox = DesTag.getTagBYId("container0");
DesStyle.addClass(contentBox, "contentBox");

// set the welcome text
let welcomeText = "";

if (user.name == "Player 2") {
    welcomeText = "The point of this card game is to lose all cards, are you ready to challenge the Makhadi Family?";
} else {
    welcomeText = "Welcome back '" + user.name + "', are you ready to challenge the Makhadi Family? "
}

// create the heading
let heading = DesTag.createTag("h1");
heading.innerText = "Welcome!";
DesTag.addToParent(heading, contentBox);

// create the paragraph
let message = DesTag.createTag("p");
message.innerText = welcomeText;
DesTag.addToParent(message, contentBox);

let message2 = DesTag.createTag("p");
message2.innerText = "To win is to lose all cards, first play the cards from your left until they are all out, then you can start using cards on the bottom screen.";
DesTag.addToParent(message2, contentBox);

let message3 = DesTag.createTag("p");
message3.innerText = "Please note: Card Zero is still under development and this is the second update";
DesTag.addToParent(message3, contentBox);

let message4 = DesTag.createTag("p");
message4.innerText = "Thank you for playing Card Zero!";
DesTag.addToParent(message4, contentBox);

// create navigation container
let nav = DesTag.createTag("nav");
DesTag.addToParent(nav, contentBox)
DesStyle.addClass(nav, "nav");

// create links to other pages
let playNav = DesTag.createTag("a");
playNav.href = "play.html";
playNav.innerText = "Go to game";
DesTag.addToParent(playNav, nav);







