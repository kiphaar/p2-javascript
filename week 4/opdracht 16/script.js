let clickElement = document.getElementById("click");    
clickElement.addEventListener("click", changeColor); 

function changeColor() {
    if (clickElement.style.color === "red") {
        clickElement.style.color = "blue";
        clickElement.innerText = "hallo";
        document.body.style.backgroundColor = "orange";
    } else {
        clickElement.style.color = "red";
        clickElement.innerText = "doei";
        document.body.style.backgroundColor = "green";
    }
}

