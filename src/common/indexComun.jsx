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
        titulosPrincipales: {
            color: '#000',
        },  
};
};

export { Constants, Theme };

