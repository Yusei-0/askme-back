
export function busquedaLinealPorAsignatura(lista = [], asignatura){

    let aux = []

    // Busqueda uno a uno y si es de la asignatura lo añade al
    // arreglo que devuelve
    for(let i =0; i < lista.length; i++)
    {
        if(lista[i].asignatura == asignatura)
            aux.push(lista[i]);  
    }


    // Devuelve un arreglo con todas las preguntas de la asignatura buscada
    return aux;
}