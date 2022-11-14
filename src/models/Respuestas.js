export class Respuesta{

    idr;
    descripcion;
    calificacion;
    fecha;
    idp;
    idu;
    
    constructor(idr, descripcion, calificacion, fecha, idp,idu){
        this.idr = idr;
        this.descripcion = descripcion;
        this.calificacion = calificacion;
        this.fecha = fecha;
        this.idp = idp;
        this.idu = idu;

    }

    // Comparando las respuestas por calificacion
    // mientras mas alta las calificaciones mayor prioridad
    compareTo(obj){
        if(this.calificacion > obj.calificacion)
            return 1;

        else if( this.calificacion < obj.calificacion)
            return -1;

            return 0;
    }
}


