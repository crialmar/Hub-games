/**import { PrintTemplateKeyboard } from "../../components";
import { wordList } from "../../utils";
import "./Ahorcado.css";*/

const template = () => `
    <div id="ahorcado">
        <div id="keyboard"></div>
        <input
            type="text"
            id="inputPalabra"
            placeholder="Adivina la palabra"
        />
        <div id="wordList"></div>
        <div class="content">
            <img src="#"alt="gif">
            <h4>Game Over!</h4>
            <p>The correct word was:<b>rainbow</b></p>
            <buttonclass="play-again">Play Again</button>
            </div>
    </div>
`

const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
//const playAgainBtn = gameModal.querySelector("button");

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

getRandomWord();

const botonAgain = playAgainBtn.addEventListener("click", getRandomWord);

/*export const PrintAhorcadoPage = () => {
    document.getElementById("main").innerHTML = template();
    PrintTemplateKeyboard()
}*/