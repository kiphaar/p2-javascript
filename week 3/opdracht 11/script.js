

let budgetText = document.getElementById("budgetText");

let budget="100"
let product="60"

if (budget >=60) {

console.log("je hebt genoed geld");
budgetText.innerHTML="je hebt genoeg geld";
budgetText.style.color="green"

} else {
    console.log("je bent broke");
    budgetText.innerHTML="je bent broke";
    budgetText.style.color="red"
}


