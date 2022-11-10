// JavaScript Document
console.log("Howdy!");

var audio = new Audio("./sounds/lapras.mp3");

// Counter op 0 voor het veranderen van de Lapras
var counter = 0;

// Variabelen

var pokeball = document.querySelector("header button");
var deLapras = document.querySelector("a img");
var pokedex = document.querySelector("header button:nth-of-type(2)");
var muziekNoot = document.querySelector("header button:nth-of-type(3)");
var hartje = document.querySelector("header button:nth-of-type(4)");
var tekst = document.querySelector("header p");


// De button naar een click laten luiteren

pokeball.addEventListener("click", verander);


// Functie aanmaken met de counter. Elke click verandert de Lapras

function verander() {
    counter++

    if (counter === 1) {
        deLapras.classList.remove("gen1");
        deLapras.classList.add("gen2");
    } else if (counter === 2) {
        deLapras.classList.remove("gen2");
        deLapras.classList.add("gen3");
    } else if (counter === 3) {
        deLapras.classList.remove("gen3");
        deLapras.classList.add("gen4");
    } else if (counter === 4) {
        deLapras.classList.remove("gen4");
        deLapras.classList.add("gen5");
    } else if (counter === 5) {
        deLapras.classList.remove("gen5");
        deLapras.classList.add("gen6");
    } else if (counter === 6) {
        deLapras.classList.remove("gen6");
        deLapras.classList.add("gen7");
    } else {
        counter = 0;
        deLapras.classList.remove("gen7");
        deLapras.classList.add("gen1");
    }
    tekst.textContent = "Je hebt op de Pokeball geklikt & nu is Lapras de volgende generatie. Klik nu is op het hartje en zie meer van Lapras!"

}

// Als er op de button gedrukt word komt er tekst in beeld

pokedex.addEventListener("click", informatie);

function informatie() {
    var tekst = document.querySelector("article section:nth-of-type(1) p");

    tekst.classList.toggle("visible");

}

hartje.addEventListener("click", toonInformatie);

function toonInformatie () {
    var tekstTwee = document.querySelector("article section:nth-of-type(2) p");

    tekstTwee.classList.toggle("zichtbaar");
}

muziekNoot.addEventListener("click", speelAf);

function speelAf() {
    audio.play();
    tekst.textContent = "Luister goed! Dan hoor je Lapras zingen! Lapras zingt vaak samen met zijn soortgenoten of als hij blij en gelukkig is."

}