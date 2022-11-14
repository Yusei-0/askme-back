export function BurbujaPreguntas(lista) {
    
    let n, aux;
    n = lista.length;

    // Algoritmo de burbuja para preguntas usando el compare to de la clase Preguntas

    for (let k = 1; k < n; k++) {
        for (let i = 0; i < (n - k); i++) {

            //compara e intercambia si cumple las condiciones
            if (this.lista[i].compareTo(lista[j]) > 0) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }

    return lista; // Devolvemos la lista ordenada
}


