import { PrintTemplateKeyboard } from "../../components";
import { wordList } from "../../utils/wordList";
import "./Ahorcado.css";

console.log(wordList);

//? ------------------------------TEMPLATE INICIAL--------------------------------
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
                <h4 class="hint-text">Hint: <b></b></h4>
            <button class="play-again">Play Again</button>
            </div>
    </div>
`
//? ----------------- FUNCION QUE TRAE LOS DATOS DEL CONTEXTO--------------------
let playAgainBtn; //*----------------------> te daba typeError: uncaught ReferenceError: playAgainBtn is not defined at Ahorcado.js:65:20
//*----------------------> por eso ahora está en global scope, para poder utilizarla... tampoco te convenc
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
//const playAgainBtn = document.querySelector("button");


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
/*const botoncito = () => {
   document.addEventListener('DOMContentLoaded', () => {
   setGame(); 
   const botonAgain = playAgainBtn.addEventListener("click", getRandomWord);
}); 
}*/
//*--------------------------> solución dada por ChatGPT. No nos convence

const getRandomWord = () => {  //* -----------> Usando la wordlist, elige una palabra y pista de forma aleatoria
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    console.log(document.querySelector(".hint-text"))  //* -------------> Ahora currentWord es la palabra creada de forma aleatoria
    document.querySelector(".hint-text").textContent = hint;
    resetGame();
}

const gameOver = (isVictory) => {     //* -----------> Modals que al final de partida enseñan un mensaje de victoria o no
    const modalText = isVictory ? `You found the word:` : 'The correct word was:';
    gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = `${modalText}<b>${currentWord}</b>`;
    gameModal.classList.add("show");
}
//getRandomWord();
//const botonAgain = playAgainBtn.addEventListener("click", getRandomWord);

//document.addEventListener('DOMContentLoaded', setGame);

//? ---------------------FUNCION QUE SE EXPORTA QUE PINTA LA PAGINA--------------
export const PrintAhorcadoPage = () => {
    document.querySelector("main").innerHTML = template();
    setGame()
}