window.onscroll = function() { myFunction() };

// Get the header
var header = document.querySelector("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}



function menue() {
    let close = "icofont-ui-close";
    console.log("clicked");
    changeicon();
    main();

}


function changeicon() {
    let cMenue = document.querySelector(".menue");
    let menue = document.querySelector("#menue");

    if (menue.getAttribute("class") === "icofont-navigation-menu") {
        menue.innerHTML = "";
        cMenue.innerHTML = ` <i id="menue" onclick="menue()" class="icofont-close"></i>`;

    } else {
        menue.innerHTML = "";
        cMenue.innerHTML = ` <i id="menue" onclick="menue()" class="icofont-navigation-menu"></i>`;
    }

}

function main() {
    let navul = document.querySelector("#navul");
    navul.classList.toggle("toggle")

}