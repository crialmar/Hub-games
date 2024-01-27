import { initControler } from "../../utils";
import "./Wackatopo.css";

const template = () => `
    <div id="Wackatopo">
     <h1 id="titleGame">DALE DURO AL TOPO</h1>
     <h2 id="score">0</h2>
     <div id="boardGame"></div>
     <button id="resetGame">AGAIN!</div>
    </div>
`;

let currMoleTile;
let currBombTile;
let score = 0;
let gameOver = false;
//*----------------------------------------> ESTO DENTRO DE AQUI
window.onload = function () {
    setGame();
}

const setGame = () => {
    for (let i = 0; i < 9; i++) { // de esta forma te ahorras escribir <div id="0-8"></div> en un html
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000);
    setInterval(setBomb, 2000);
}
//*---------------------------------------> junto con los let de arriba, ?
const getRandomTile = () => {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

const setMole = () => {
    if (gameOver) {
        return;
    } else if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "https://res.cloudinary.com/dm8swv5zy/image/upload/f_auto,q_auto/qju5lmo9f79byyzoitau.png";

    let num = getRandomTile();
    if (currBombTile && currBombTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

const setBomb = () => {
    if (gameOver) {
        return;
    } else if (currentBombTile) {
        currBombTile.innerHTML = "";
    }
    let bomb = document.createElement("img");
    bomb.src = "https://res.cloudinary.com/dm8swv5zy/image/upload/f_auto,q_auto/jwke10t6gdvvitwrfv94.png";

    let num = getRandomTile();

    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currBombTile = document.getElementById(num);
    currBombTile.appendChild(bomb);
}

const selectTile = () => {
    if (gameOver) {
        return;
    } else if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html
    } else if (this == currBombTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
    }
}

/*export const PrintWackatopoPage = () => {
    document.querySelector("main").innerHTML = template();
};*/