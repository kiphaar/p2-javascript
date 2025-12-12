const textMsg = document.getElementById("textMsg");

let keuzeDrank =prompt("cola, water of koffie?");

if (keuzeDrank==="cola") {
    textMsg.innerHTML= "je krijgt een blikje cola";
    textMsg.style.color="red";


}
else if (keuzeDrank==="water") {
textMsg.innerHTML= "Goed bezig, lekker gezond!";
textMsg.style.color="blue";

}
else if (keuzeDrank==="koffie") {
    textMsg.innerHTML= "energie incoming!";
    textMsg.style.color="brown";
}
else {
   textMsg.innerHTML= "jammer genoeg hebben wij dit vloeibaar spul niet op vrijdag";
}