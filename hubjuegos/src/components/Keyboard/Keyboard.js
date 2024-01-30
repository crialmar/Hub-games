import { click_letras } from "../../utils";
import "./Keyboard.css";

const template = `
<button>a</button>
<button>b</button>
<button>c</button>
<button>d</button>
<button>e</button>
<button>f</button>
<button>g</button>
<button>h</button>
<button>i</button>
<button>j</button>
<button>k</button>
<button>l</button>
<button>m</button>
<button>n</button>
<button>ñ</button>
<button>o</button>
<button>p</button>
<button>q</button>
<button>r</button>
<button>s</button>
<button>t</button>
<button>u</button>
<button>v</button>
<button>w</button>
<button>x</button>
<button>y</button>
<button>z</button>
`;

const listeners = () => {
    const btn_letras = document.querySelectorAll("#letras button");
    for (let i = 0; i < btn_letras.length; i++) {
        btn_letras[i].addEventListener("click", click_letras);
    }
};

export const PrintTemplateKeyboard = () => {
    document.getElementById("letras").innerHTML = template;
    listeners();
};







/*for (let i = 97; i <= 122; i++) { //*---------------> para hacer el abecedario
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    // keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
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
export const PrintTemplateKeyboard = () =>
    (document.getElementById("keyboard").innerHTML = template());*/  //*------------> era parte de otro intento

