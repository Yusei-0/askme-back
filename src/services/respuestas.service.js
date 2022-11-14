import { getRespuestas } from "../database/Respuestas.store";
import { PriorityQueue } from "../models/ED/colaprioridad";
import { Respuesta } from "../models/Respuestas";

export class RespuestasService {

    PQ_Respuestas = new PriorityQueue();

    constructor ()
    {  
        this.respuestas = getRespuestas();

        // cargando los datos en memoria
        for(let i =0; i < this.respuestas.length; i++)
        {
            let aux = new Respuesta(
                this.respuestas[i].idr,
                this.respuestas[i].descripcion,
                this.respuestas[i].calificacion,
                this.respuestas[i].fecha,
                this.respuestas[i].idp,
                this.respuestas[i].idu
            )

            this.PQ_Respuestas.add(aux);
        }
                
    }

    // Añade Una nueva respuesta
    addRespuesta (respuesta){
        this.PQ_Respuestas.add(respuesta)
    }

    // Extrae las 5 primeras respuestas
    get_5_Respuestas(){
        let aux = []

        for( let i =0; i < 5; i ++)
        aux = this.PQ_Respuestas.eliminarMin();

        return aux;
    }

    //Extrae la ultima respuesta
    getLastRespuesta(){
        return this.PQ_Respuestas.eliminarMin();
    }


}