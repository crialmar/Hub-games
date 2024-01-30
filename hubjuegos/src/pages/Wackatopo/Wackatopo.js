
import { setIdMoleOne, setIdMoleTwo } from "../../global/state/molestate";
import "./Wackatopo.css";

//? ------------------------------TEMPLATE INICIAL--------------------------------
const template = () => `
    <div id="bodyWackatopo">
        <h1 id="titleGame">DALE DURO AL TOPO</h1>
        <h2 id="score"> 0 </h2>
        <div id="0-8"></div>
        <div id="board"></div>
        <button id="resetGame">AGAIN!</button>
    </div>
`;

//? ----------------- FUNCION QUE TRAE LOS DATOS DEL CONTEXTO--------------------
let currMoleTile;
let currBombTile;
let score = 0;
let gameOver = false;
//*----------------------------------------> ESTO DENTRO DE AQUI
/*const carga = window.onload = () => {
    setGame();
}*/

const setGame = () => {
    for (let i = 0; i < 9; i++) { // de esta forma te ahorras escribir <div id="0-8"></div> en un html
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    const idIntervalMole = setInterval(setMole, 1000);
    setIdMoleOne(idIntervalMole)
    const idIntervalBomb = setInterval(setBomb, 2000);/**HAY QUE LIMPIARLO CON CLEAR INTERVAL*/
    setIdMoleTwo(idIntervalBomb)
}

const getRandomTile = () => {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

const setMole = () => { //*-------> pone los topos
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
    } else if (currBombTile) {
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

//const selectTile = () => {
function selectTile() {
    if (gameOver) {
        return;
    } else if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //* ----------> actualiza la puntuación en html
    } else if (this == currBombTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //* ----------> da el game over
        gameOver = true;
    }
}

/**poner aqui el clear*/
const stopInterval = () => {
    clearInterval(setGame);
}

//? ---------------------FUNCION QUE SE EXPORTA QUE PINTA LA PAGINA--------------
export const PrintWackatopoPage = () => {
    document.querySelector("main").innerHTML = template();
    setGame();
};