let budgetText = document.getElementById("budgetText");

let budget = 100;
let product = prompt("hoeveel kost het product dat je wil je kopen?");


if (budget >= product) {

console.log("genoed geld");
budgetText.innerHTML="je hebt genoeg geld";
budgetText.style.color="green"

} else {
    console.log("niet genoeg geld");
    budgetText.innerHTML="je hebt niet genoeg geld";
    budgetText.style.color="red"
}
