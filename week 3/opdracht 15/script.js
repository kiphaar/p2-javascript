let count = 0;

function teller() {
  count++;
  console.log(count);
  document.getElementById("text").textContent = count;
  
  if (count >= 5) {
    document.getElementById("text").innerHTML = "Pauze? Water is ook lekker";
  } else if (count >= 3) {
    document.getElementById("text").innerHTML = "Dat zijn er best veel!";
  }
}


document.getElementById("text").textContent = count;