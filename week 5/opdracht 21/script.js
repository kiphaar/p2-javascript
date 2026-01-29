let activiteiten = ["wandelen", "mediteren", "slapen",] ;
let voorwerpen = ["aap", "basgitaar", "citroen",] ;

let randomActiviteit = activiteiten[Math.floor(Math.random() * activiteiten.length)];
let randomVoorwerp = voorwerpen[Math.floor(Math.random() * voorwerpen.length)];

function advies() {
    document.getElementById("advies").innerHTML = "Vandaag moet jij " + randomActiviteit + " met een " + randomVoorwerp + ".";
}