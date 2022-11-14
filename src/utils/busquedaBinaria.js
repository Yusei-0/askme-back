export function busquedaBinaria(arr, busqueda) {
  //Busqueda binaria sirve para encontrar un elemento de una lista ordenada

    const puntoMedio = Math.floor(arr.length / 2);
    //Math.floor redondea por exceso y devuelve el numero entero
  
    if (arr[puntoMedio] === busqueda) {
      return arr[puntoMedio];
    }
  
    if (arr[puntoMedio] < busqueda && arr.length > 1) {
     return busquedaBinaria(arr.slice(puntoMedio), busqueda);
    }
  /*arr.slice sirve para devolver una copia de una parte 
  del arreglo dentro de un nuevo arreglo empezando por inicio hasta fin sin incluir el fin*/
    if (arr[puntoMedio] > busqueda && arr.length > 1) {
     return busquedaBinaria(arr.slice(0, puntoMedio), busqueda);
    }
  
    return "no encontrado :(";
  }
