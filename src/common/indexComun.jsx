import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { IoChevronBackCircleSharp } from "react-icons/ai";

const Constants = {
    Bottons: {
        like: <AiFillLike/>,
        dislike: <AiFillDislike/>,
        back: <IoChevronBackCircleSharp/>,
    },
    quizDiario: {
        lunes: "¿Quién dirigió la película El Padrino?",
        martes: "¿Cuál es la película más taquillera de todos los tiempos?",
        miercoles: "¿Cuál es el nombre completo del personaje interpretado por Robert Downey Jr. en la saga de películas de Marvel?",
        jueves: "¿Qué actor interpretó a James Bond en la película Casino Royale de 2006?",
        viernes: "¿Qué director es conocido por películas como El Laberinto del Fauno y Hellboy?",
    },
};
const Theme = {
    colors: {
        tituloPrincipal: {
            color: '#000',
        },
        paletaDeColores1: {
            oscuroVioleta: '#593954',
            verdeAzulado: '#013440',
            verdeAzuladoIntenso: '#026873',
            verdeAzuladoBrillante: '#038C8C',
            verdeMedioAzulado: '#038C7F',
        },
        paletaDeColores2: {
            verdeOscuro: '#014040',
            verdeMedioOscuro: '#02735E',
            verdeLimon: '#03A678',
            naranja: '#F27405',
            rojoOscuro: '#731702',
        },
};
};

export { Constants, Theme };

