console.log("jeg er i guessnumber")

const lblMessage = document.querySelector(".message");
console.log(lblMessage);
console.log(lblMessage.textContent)

const lblNumber = document.querySelector(".number");
console.log(lblNumber);

const lblScore = document.querySelector(".score");
console.log(lblScore);

function getRandom() {
    return Math.floor(Math.random() * 20) + 1;
}

lblNumber.value = getRandom();

const checkButton = document.querySelector(".check");

checkButton.addEventListener("click", checkInput);

const guess = document.querySelector(".guess");

const highscore = document.querySelector(".highscore");

function checkInput() {
    const guessValue = guess.value;
    const actualValue = lblNumber.value;

    if (guessValue == actualValue) {
        guess.setAttribute("disabled", true);
        lblMessage.textContent = "Correct!";
        lblNumber.textContent = actualValue;
        document.body.style.backgroundColor = "green";
        checkButton.removeEventListener("click", checkInput);

        if (Number(lblScore.textContent) > Number(highscore.textContent)) {
            highscore.textContent = lblScore.textContent;
        }

    } else if (guessValue < 1 || guessValue > 20) {
        lblMessage.textContent = "Not in range";
    } else if (guessValue < actualValue) {
        incorrect("Too low");
    } else {
        incorrect("Too high");
    }
}

function incorrect(msg) {
    lblMessage.textContent = msg;
    lblScore.textContent--;

    if (lblScore.textContent === "0") {
        guess.setAttribute("disabled", true);
        document.body.style.backgroundColor = "red";
        lblMessage.textContent = "Failed!";
        lblNumber.textContent = lblNumber.value;
        checkButton.removeEventListener("click", checkInput);
    }

}

document.querySelector(".again").addEventListener("click", restart);

function restart() {
    document.body.style.backgroundColor = "#222";
    lblMessage.textContent = "Start guessing...";
    lblNumber.value = getRandom();
    lblNumber.textContent = "?";
    guess.value = "";
    lblScore.textContent = 20;
    guess.removeAttribute("disabled");
    checkButton.addEventListener("click", checkInput);
}