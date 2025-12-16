let leeftijd = prompt("Wat is je leeftijd?");
let leeftijdElement = document.getElementById("leeftijd");

if (leeftijd >= 18) {
    console.log("Welkom!")
    leeftijdElement.innerHTML = "Welkom!";
} else {
    console.log("Je mag hier nog niet naar binnen.");
    leeftijdElement.innerHTML = "Je mag hier nog niet naar binnen.";
}








