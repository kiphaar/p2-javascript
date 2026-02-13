let count = 0;

const counterEl = document.getElementById("counterElement");
const pizzaWrap = document.getElementById("pizzaWrap");
const messageEl = document.getElementById("message");
const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn");
const overlay = document.getElementById("overlay");
const playAgainBtn = document.getElementById("playAgainBtn");

function updateUI() {
  // pluralization
  const label = count === 1 ? "pizza" : "pizza's";
  counterEl.textContent = `${count} ${label}!`;

  // show more pizza emojis as count grows (simple visual)
  const repeat = Math.min(count, 10);
  pizzaWrap.textContent = repeat > 0 ? '🍕'.repeat(repeat) : '🍕';

  // subtle color change with count
  const green = Math.min(200, 50 + count * 10);
  counterEl.style.color = `rgb(20, ${green}, 20)`;

  // messages at milestones
  if (count === 0) {
    messageEl.textContent = 'Start met klikken om pizza te verzamelen.';
  } else if (count >= 20) {
    messageEl.textContent = 'Klasse-traktatie! 🎉';
  } else if (count >= 5) {
    messageEl.textContent = 'Dat begint ergens op te lijken 😋';
  } else {
    messageEl.textContent = '';
  }

  // show win overlay at 10 or more
  if (count >= 10) {
    overlay.style.display = 'flex';
  }
}

function addPizza() {
  count++;
  updateUI();
}

function resetCount() {
  count = 0;
  overlay.style.display = 'none';
  updateUI();
}

addBtn.addEventListener('click', addPizza);
resetBtn.addEventListener('click', resetCount);
playAgainBtn.addEventListener('click', resetCount);

// initial UI
updateUI();


