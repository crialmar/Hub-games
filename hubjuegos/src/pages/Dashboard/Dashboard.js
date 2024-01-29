//Dashboard.js ------> src/componets/Dashboard/Dashboard.js
import { getIntervalMole } from "../../global/state/molestate";
import { getInfo, initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="https://res.cloudinary.com/dm8swv5zy/image/upload/f_auto,q_auto/o5i0n0e9unoo7ajstf9s.png"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li>
        <figure id= "navigateTopo">
          <img
            src="https://res.cloudinary.com/dm8swv5zy/image/upload/f_auto,q_auto/mj4qtunzbu4ncxdr9caa.png"
            alt=" go to wacka topo game"
          />
          <h2>WACKA TOPO</h2>
        </figure>
      </li>
      <li>
        <figure id="ahorcadoClave">
          <img
            src="https://res.cloudinary.com/dm8swv5zy/image/upload/f_auto,q_auto/axwbunywlddavjpomcsx.png"
            alt="go to memory game"
          />
          <h2>AHORCADO</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListeners = () => {
  /** le damos el evento al boton de pokemon que es la unica pagina de contenido por
   * ahora esta creada en el proyecto
   */

  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });

  const navigateTopo = document.getElementById("navigateTopo");
  navigateTopo.addEventListener("click", () => {
    initControler("Topo");
  });

  const ahorcadoClave = document.getElementById("ahorcadoClave");
  ahorcadoClave.addEventListener("click", () => {
    initControler("ahorcadoClave");
  });

};


export const printTemplateDashboard = () => {
  clearInterval(getIntervalMole().idMoleOne)
  clearInterval(getIntervalMole().idMoleTwo)
  /** Como siempre las paginas se renderizan en el main por lo cual inyectamos el template en el contenedor del main */
  document.querySelector("main").innerHTML = template();

  /** Para la nav, que la habiamos ocultado en el login, la volvemos a renderizar cambiandole el display de none a flex */
  document.querySelector("nav").style.display = "flex";

  /** metemos los escuchadores de la pagina */
  addEventListeners();

  getInfo();
};