let geboortejaar = prompt("wat is je geboortejaar?");
let huidigeJaar = new Date().getFullYear();
let leeftijd = huidigeJaar - geboortejaar;
document.getElementById("leeftijd").innerText = "je bent ongeveer " + leeftijd + " jaar oud";
