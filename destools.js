





///////// DESTOOLS VERSION 0.001 //////////////
///////// By Desmond Milani 2024-02-28 ///////
/*
These tools are used to develop web applications using:
JavaScript and the DOM dynamically
*/




// class for dealing with tags
class DesTag {
    constructor(){}

    // function to create any tag
    static createTag = (tagName) => {
        let tag = document.createElement(tagName);
        return tag;
    }

    // function to add child to parent
    static addToParent = (childTag, parentTag) => {
        parentTag.appendChild(childTag);
    }

    // function to select tag by its id
    static getTagBYId = (tagId) => {
        let tag = document.getElementById(tagId);
        return tag;
    }

    // function to empty tag
    static emptyTag = (tag) => {
        tag.innerHTML = "";
    }
    
}

// class for dealing with style
class DesStyle {
    constructor(){}

    // function to add style class to tags
    static addClass = (tag, tagClass) => {
        tag.classList.add(tagClass);
    }

    // function to remove style class from tag
    static removeClass = (tag, tagClass) => {
        tag.classList.remove(tagClass);
    }

    //function to hide the tag
    static hideTag = (tagId) => {
        let tag = this.getTagBYId(tagId);
        tag.style.display = "none";
    }

    //function to display the tag
    static displayTag = (tagId, displayStyle = "inline-block") => {
        let tag = this.getTagBYId(tagId);
        tag.style.display = displayStyle;
    }
}

// class for creating layouts
class DesLayout {
    constructor(){}

    // function to create simple layout
    static createSimple = (id, numberOfBoxes = 1) => {
        let container = DesTag.createTag("div");
        container.id = id;

        // create the inside boxes
        let i = 0;

        for (i; i < numberOfBoxes; i++) {
            let box = DesTag.createTag("div");
            box.id = id + i;

            DesTag.addToParent(box, container);
        }

        return container;
    }
}

// class for creating content
class DesContent {
    constructor() {}

    // function to create header
    static createHeader = (id, headerType = 0) => {
        let heading, subHeading, image;
        let header = DesTag.createTag("header");

        if (headerType == 0) {
            heading = DesTag.createTag("h1");
            heading.id = id + "_heading";
            header.appendChild(heading);
        } else if (headerType == 1) {
            heading = DesTag.createTag("h1");
            heading.id = id + "_heading";
            subHeading = DesTag.createTag("h2");
            subHeading.id = id + "_sub";
            header.appendChild(heading);
            header.appendChild(subHeading);
        } else if (headerType == 2) {
            image = DesTag.createTag("img");
            image.id = id + "_image";
            heading = DesTag.createTag("h1");
            heading.id = id + "_heading";
            header.appendChild(image);
            header.appendChild(heading);
        } else if (headerType == 3) {
            image = DesTag.createTag("img");
            image.id = id + "_image";
            heading = DesTag.createTag("h1");
            heading.id = id + "_heading";
            subHeading = DesTag.createTag("h2");
            subHeading.id = id + "_sub";
            header.appendChild(image);
            header.appendChild(heading);
            header.appendChild(subHeading);
        }

        return header;


    }

    // function to create navigation
    static createNav = (id, numberOfItems = 1) => {
        let nav = DesTag.createTag("nav");
        nav.id = id;

        // create the number of items in a nav
        let i = 0;
        for (i; i < numberOfItems; i++) {
            let a = DesTag.createTag("a");
            a.href = "#";
            a.id = id + i;
            DesTag.addToParent(a, nav);
        }

        return nav;
    }
}