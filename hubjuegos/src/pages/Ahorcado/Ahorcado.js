import { PrintTemplateKeyboard } from "../../components";
import { finJuego, id, iniciar } from "../../utils";
import "./Ahorcado.css";

const template = () => `
<img id="imagen" src="img/img0.png" alt="Ahorcado" />
<div>
    <p id="palabra_a_adivinar"></p>
    <button id="jugar">Obtener palabra</button>

    <p id="resultado"></p>

    <div id="letras"></div>
</div>`;

const listeners = () => {
    const btn = id("jugar");
    btn.addEventListener("click", iniciar);
};

export const PrintAhorcadoPage = () => {
    document.querySelector("main").innerHTML = template();
    PrintTemplateKeyboard();
    listeners();
    finJuego();
};