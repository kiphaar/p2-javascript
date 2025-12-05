

let darkb = document.getElementById("darkb")
let lightb = document.getElementById("lightb")


function dark(){

document.body.style.backgroundColor= "black"
document.body.style.color= "white"
document.getElementById("text").innerHTML="slaaplekker!🌆"
darkb.style.backgroundColor="red"
}

function light(){

document.body.style.backgroundColor= "white"
document.body.style.color= "black"
document.getElementById("text").innerHTML="wakey wakey!🌅"
lightb.style.backgroundColor="blue"
lightb.style.color="white"
}