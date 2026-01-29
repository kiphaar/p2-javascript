let emojis = ["😀", "😂", "😍", "🤔", "😎", "😭",];

let randomIndex = Math.floor(Math.random() * emojis.length);

let randomEmoji = emojis[randomIndex];

function showEmoji() {
    document.getElementById("emoji").innerText = emojis[randomIndex] + " (index: " + randomIndex + ")";
}   