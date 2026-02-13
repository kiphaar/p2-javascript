// Alle antwoorden
const answers = [
    "Ja!",
    "Nee",
    "Misschien",
    "Ongetwijfeld",
    "Vraag later",
    "Zeker niet",
    "Alle tekenen wijzen op ja",
    "Dat lijkt niet waarschijnlijk",
    "Heel waarschijnlijk",
    "Onmogelijk",
    "Ja, zeker",
    "Nee, zeker niet"
];

let lastAnswer = null;

// Knoppen en velden
const askBtn = document.getElementById("askBtn");
const resetBtn = document.getElementById("resetBtn");
const question = document.getElementById("question");
const warning = document.getElementById("warning");
const questionScreen = document.getElementById("questionScreen");
const answerScreen = document.getElementById("answerScreen");
const displayQuestion = document.getElementById("displayQuestion");
const answer = document.getElementById("answer");

// Klik op "Antwoord geven"
askBtn.addEventListener("click", function() {
    const userQuestion = question.value;
    
    // Controleer of er een vraag is ingevuld
    if (userQuestion === "") {
        warning.style.display = "block";
        return;
    }
    
    warning.style.display = "none";
    
    // Kies een willekeurig antwoord
    let randomAnswer;
    do {
        randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    } while (randomAnswer === lastAnswer);
    lastAnswer = randomAnswer;
    
    // Toon het antwoord
    displayQuestion.textContent = userQuestion;
    answer.textContent = randomAnswer;
    
    // Wissel van scherm
    questionScreen.classList.add("hidden");
    answerScreen.classList.remove("hidden");
});

// Klik op "Nieuwe Vraag"
resetBtn.addEventListener("click", function() {
    question.value = "";
    warning.style.display = "none";
    
    questionScreen.classList.remove("hidden");
    answerScreen.classList.add("hidden");
    
    question.focus();
});
