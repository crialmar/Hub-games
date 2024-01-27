const template = () => `
    <div id="ahorcado">
        <div id="keyboard"></div>
        <input
            type="text"
            id="inputPalabra"
            placeholder="Adivina la palabra"
        />
        <div id="wordList"></div>
    </div>
`
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");

//*------------------> Inicialización de las variables

let currentWord, correctLetters, wrongGuessCount;

const maxGuesses = 6;

const resetGame = () => {    //*--------------------------> Reseteo de las variables y los elementos UI
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "images/hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount}/${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
}

const getRandomWord = () => {  //* -----------> Usando la wordlist, elige una palabra y pista de forma aleatoria
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;     //* -------------> Ahora currentWord es la palabra creada de forma aleatoria
    document.querySelector(".hint-text b").innerText = hint; resetGame();
}

const gameOver = (isVictory) => {     //* -----------> Modals que al final de partida enseñan un mensaje de victoria o no
    const modalText = isVictory ? `You found the word:` : 'The correct word was:';
    gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = `${modalText}<b>${currentWord}</b>`;
    gameModal.classList.add("show");
}
const initGame = (button, clickedLetter) => { //*------> Vamos a comprobar que clickedLetter esté en currentWord
    if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed"); //* --------> da un diseño concreto de css
            }
        });

    } else { //* ---------> Si la palabra no existe entonces se actualiza wrongGuessCount y la imagen del ahorcado
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    }

    button.disabled = true; //* --------> se deshabilita la letra
    guessesText.innerText = `${wrongGuessCount}/${maxGuesses}`; //* --------> muestra la cantidad de intentos fallidos y el máximo de intentos permitidos

    //*---------> Llamamos a gameOver si se dan alguna de las siguientes condiciones
    if (wrongGuessCount === maxGuesses) returngameOver(false);
    if (correctLetters.length === currentWord.length) return gameOver(true);
}

getRandomWord();

playAgainBtn.addEventListener("click", getRandomWord);