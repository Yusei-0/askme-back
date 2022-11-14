export class Preguntas{

    titulo;
    idp;
    votos;
    fecha;
    descripcion;
    asignatura;
  
    constructor(titulo, idp, votos, fecha, descripcion){
        this.titulo = titulo;
        this.idp = idp;
         
    }


    // Compareto para ordenar alfabeticamente las preguntas por asignatura    
    compareTo(obj = Preguntas){
        if(String.toString(this.asignatura).charAt[0] <
           String.toString(obj.votos).charAt[0])
            return 1;
            
        else if( String.toString(this.asignatura).charAt[0] >
                 String.toString(obj.votos).charAt[0])
            return -1;

            return 0;
    }
}
