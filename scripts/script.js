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
var achtergrond = document.querySelector("main");
var zee = document.querySelector("main > img");

// De button naar een click laten luisteren en de Lapras naar de click laten luisteren

pokeball.addEventListener("click", verander);
deLapras.addEventListener("click", verander);


// Functie aanmaken met de counter. Elke click verandert de Lapras, de achtergrond en de zee waar Lapras in zwemt. Ook is de tekst steeds anders zodat je weet welke generatie wat is.

function verander() {
    counter++

    if (counter === 1) {
        deLapras.classList.remove("gen1");
        achtergrond.classList.remove("zeegen1");
        zee.classList.remove("voorkant1");
        deLapras.classList.add("gen2");
        achtergrond.classList.add("zeegen2");
        zee.classList.add("voorkant2");
        tekst.textContent = "Dit is de tweede generatie van de Pokemon Lapras. Klik snel door om de volgende generatie van Lapras te bekijken!";
    } else if (counter === 2) {
        deLapras.classList.remove("gen2");
        achtergrond.classList.remove("zeegen2");
        zee.classList.remove("voorkant2");
        deLapras.classList.add("gen3");
        achtergrond.classList.add("zeegen3");
        zee.classList.add("voorkant3");
        tekst.textContent = "Dit is de derde generatie van de Pokemon Lapras. Klik snel door om de volgende generatie van Lapras te bekijken!";
    } else if (counter === 3) {
        deLapras.classList.remove("gen3");
        achtergrond.classList.remove("zeegen3");
        zee.classList.remove("voorkant3");
        deLapras.classList.add("gen4");
        achtergrond.classList.add("zeegen4");
        zee.classList.add("voorkant4");
        tekst.textContent = "Dit is de vierde generatie van de Pokemon Lapras. Klik snel door om de volgende generatie van Lapras te bekijken!";
    } else if (counter === 4) {
        deLapras.classList.remove("gen4");
        achtergrond.classList.remove("zeegen4");
        zee.classList.remove("voorkant4");
        deLapras.classList.add("gen5");
        achtergrond.classList.add("zeegen5");
        zee.classList.add("voorkant5");
        tekst.textContent = "Dit is de vijfde generatie van de Pokemon Lapras. Klik snel door om de volgende generatie van Lapras te bekijken!";
    } else if (counter === 5) {
        deLapras.classList.remove("gen5");
        achtergrond.classList.remove("zeegen5");
        zee.classList.remove("voorkant5");
        deLapras.classList.add("gen6");
        achtergrond.classList.add("zeegen6");
        zee.classList.add("voorkant6");
        tekst.textContent = "Dit is de zesde generatie van de Pokemon Lapras. Klik snel door om de volgende generatie van Lapras te bekijken!";
    } else if (counter === 6) {
        deLapras.classList.remove("gen6");
        achtergrond.classList.remove("zeegen6");
        zee.classList.remove("voorkant6");
        deLapras.classList.add("gen7");
        achtergrond.classList.add("zeegen7");
        zee.classList.add("voorkant7");
        tekst.textContent = "Dit is de zevende generatie van de Pokemon Lapras. Klik snel door om de volgende generatie van Lapras te bekijken!";
    } else {
        counter = 0;
        deLapras.classList.remove("gen7");
        achtergrond.classList.remove("zeegen7");
        zee.classList.remove("voorkant7");
        deLapras.classList.add("gen1");
        achtergrond.classList.add("zeegen1");
        zee.classList.add("voorkant1");
        tekst.textContent = "Dit is de eerste generatie van de Pokemon Lapras. Klik snel door om de volgende generatie van Lapras te bekijken!";
    }
    // Oude versie
    /*tekst.textContent = "Je hebt op de Pokeball geklikt & nu is Lapras de volgende generatie. Klik nu is op het hartje en zie meer van Lapras!"*/

}

/* Was een test function verander2() {
    counter2++

    if (counter2 === 1) {
        achtergrond.classList.remove("zeegen1");
        achtergrond.classList.add("zeegen2");
    } else if (counter2 === 2) {
        deLapras.classList.remove("zeegen2");
        deLapras.classList.add("zeegen3");
    } else if (counter2 === 3) {
        deLapras.classList.remove("zeegen3");
        deLapras.classList.add("zeegen4");
    } else if (counter2 === 4) {
        deLapras.classList.remove("zeegen4");
        deLapras.classList.add("zeegen5");
    } else if (counter2 === 5) {
        deLapras.classList.remove("zeegen5");
        deLapras.classList.add("zeegen6");
    } else if (counter2 === 6) {
        deLapras.classList.remove("zeegen6");
        deLapras.classList.add("zeegen7");
    } else {
        counter2 = 0;
        deLapras.classList.remove("zeegen7");
        deLapras.classList.add("zeegen1");
    }
    

}
*/

// Als er op de button gedrukt word komt er tekst in beeld en gaat ook weer weg

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

// Oude JS
/*muziekNoot.addEventListener("click", speelAf);

function speelAf() {
    audio.play();
    tekst.textContent = "Luister goed! Dan hoor je Lapras zingen! Lapras zingt vaak samen met zijn soortgenoten of als hij blij en gelukkig is."
}*/

// Nieuwe JS, zo kan je de audio ook op pauze zetten
muziekNoot.addEventListener("click", function(){
    if(audio.paused){
      audio.play();
    } else {
      audio.pause();
    }
    tekst.textContent = "Luister goed! Dan hoor je Lapras zingen! Lapras zingt vaak samen met zijn soortgenoten of als hij blij en gelukkig is."
  });