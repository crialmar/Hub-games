import { getUser } from "../global/state/globalstate";
import { Login, PrintPokemonPage, printTemplateDashboard } from "../pages";
/// estas paginas se haran en el punto 6 ------> Login, PrintPokemonPage, printTemplateDashboard, PrintAhorcadoPage



//! ----------------------------------------------------------------------------------------------------------------------
//? ------------ CONTROLADOR DE LO QUE SE RENDERIZA EN CADA MOMENTO------------------------------
//! ----------------------------------------------------------------------------------------------------------------------

export const initControler = (pagesRender) => {

    switch (pagesRender) {
        case undefined:
            localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
            break;
        case "Pokemon":
            PrintPokemonPage();
            break;
        case "Dashboard":
            printTemplateDashboard();
            break;
        case "Topo":
            PrintWackatopoPage();
            break;
        case "Login":
            Login();
            break;
        case "Ahorcado":
            PrintAhorcadoPage();
            break;
    }
};