let snacks = ["chips", "chocolate", "cookies"];

function showSnacks() {
    let snackList = document.getElementById("snackList");
    snackList.innerHTML = "";
    
    snacks.forEach(snack => {
        let li = document.createElement("li");
        li.textContent = snack;
        snackList.appendChild(li);
    });
}

document.getElementById("add").addEventListener("click", function() {
    let input = document.getElementById("input");
    let snackValue = input.value;
    
    if (snackValue.trim() !== "") {
        snacks.push(snackValue);
        showSnacks();
        input.value = "";
    }
});