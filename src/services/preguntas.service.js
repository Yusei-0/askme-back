import { getPreguntas } from "../database/preguntas.store";
import { Preguntas } from "../models/Preguntas";
import { BurbujaPreguntas } from "../utils/burbujaPreguntas";
import { busquedaLinealPorAsignatura } from "../utils/busquedaLineal";

export class preguntasService{

    elements = [];

    constructor(){
        let aux = getPreguntas();

        //Cargando los datos para usarlos
        for(let i=0; i < aux.length; i++){
            let a = new Preguntas(
                aux[i].titulo,
                aux[i].idp,
                aux[i].votos,
                aux[i].fecha,
                aux[i].descripcion
            )

            this.elements.push(a);
        }

        this.elements = BurbujaPreguntas(this.elements);
    }

    // Añadde una pregunta nueva y ordena
    addPregunta( pregunta){
        this.elements.push(pregunta);
        this.elements = BurbujaPreguntas(this.elements);
    }


    // Filtra teniendo en cuenta una asignatura y devuelve solo las
    // preguntas de esa asignatura    
    filtrarPorAsignatura (asignatura){

        return busquedaLinealPorAsignatura(this.elements, asignatura);
    }

    //Devuelve todas las preguntas
    getPreguntas(){
        return this.elements;
    }
}

