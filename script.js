/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/



//welkomstbericht hallo + naam;
document.getElementById('welkom').textContent = 'Welkom bij de WK pagina!';
var naam = 'mijnNaam';
naam = 'jouwNaam';

function verwerkFormulier(event) {

    event.preventDefault();
    console.log(document.querySelector('input').value);
    document.querySelector('h2').textContent = "Hallo" + document.querySelector('input').value;
    document.querySelector('form').classList.add("trigger_form_animation");
    document.querySelector('h2').classList.add("trigger_h1_animation");
    var antwoord = document.getElementById("antwoordGo").value;
    if (antwoord == 'Victor') {
        document.querySelector('h2').textContent = "Goedemiddag " + document.querySelector('input').value;
    } else if (antwoord == 'Thijs' || antwoord == 'Tim') {
        document.querySelector('h2').textContent = "Hoe is het " + document.querySelector('input').value;
    } else {
        document.querySelector('h2').textContent = "Hallo " + document.querySelector('input').value;
    }

}

document.querySelector('form').addEventListener('submit', verwerkFormulier);


/* array van alle landen */
var alleTeams = ['Brazilie', 'Nederland', 'Spanje', 'Engeland', 'Chili', 'Colombia', 'Duitsland', 'Zweden', 'Marokko', 'Denemarken', 'Mexico', 'Honduras', 'El Salvador', 'USA', 'Iran', 'Italie'];

/* zorgt voor knop 1 om een random land te kiezen */
function kiesTeam() {
    var randomLand = alleTeams[Math.floor(Math.random() * alleTeams.length)];
    document.getElementById('kiesTeampie').textContent = randomLand;

}

document.getElementById('knop').addEventListener('click', kiesTeam);

/* zorgt voor knop 2 om een random land te kiezen */
function kiesTeam2() {
    var randomLand = alleTeams[Math.floor(Math.random() * alleTeams.length)];
    document.getElementById('kiesTeampie2').textContent = randomLand;

}
document.getElementById('knop2').addEventListener('click', kiesTeam2);


/* zorgt voor de omgekeerde tekst wanneer je over de h1 hovert*/

function titelVerkeerd() {
    document.getElementById('titel').textContent = '8102 dnalsuR KW';
}

document.getElementById('titel').addEventListener('mouseover', titelVerkeerd);

function titelWeerGoed() {
    document.getElementById('titel').textContent = 'WK Rusland 2018';
}

document.getElementById('titel').addEventListener('mouseout', titelWeerGoed);

/* functie voor de verwacthingen/ leuke berichten als je op de vlaggen klikt */

function voorspelling() {
    document.getElementById('landen').textContent = 'Brazilie? Zekerheidje voor in de finale!';
}

document.getElementById('brazilie').addEventListener('click', voorspelling);

function voorspelling2() {
    document.getElementById('landen').textContent = 'Hopelijk doet dit team over 4 jaar wel mee!';
}

document.getElementById('nederland').addEventListener('click', voorspelling2);

function voorspelling3() {
    document.getElementById('landen').textContent = 'Altijd een wereldtopper geweest! Vamooos!';
}

document.getElementById('spanje').addEventListener('click', voorspelling3);

function voorspelling4() {
    document.getElementById('landen').textContent = 'Zweden? vi är bäst!';
}

document.getElementById('zweden').addEventListener('click', voorspelling4);

function voorspelling5() {
    document.getElementById('landen').textContent = 'Big squad in here!';
}

document.getElementById('usa').addEventListener('click', voorspelling5);

function voorspelling6() {
    document.getElementById('landen').textContent = 'Altijd een leuk team! Somos chapines hasta la muerte!';
}

document.getElementById('mexico').addEventListener('click', voorspelling6);

function voorspelling7() {
    document.getElementById('landen').textContent = 'Engeland heeft nog nooit een prijs gewonnen!';
}

document.getElementById('engeland').addEventListener('click', voorspelling7);


/* loop */
var einde = ["Was een leuk WK.", " Hopelijk zien we Nederland over 4 jaar! ", "Hierbij willen wij Frankrijk feliciteren met het winnen van het WK RUSLAND 2018."];
var arrayLengte = einde.length;

var i;
for (i = 0; i < arrayLengte; i++) {
    document.getElementById('afsluiting').textContent += einde[i];
}
