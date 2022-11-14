export class PriorityQueue{

  constructor(){
    this.elements = [];
  }

  esVacia(){
    if(this.elements.length == 0)
    return true;
    else return false;
}

  add( element){

    this.elements.push(element);
    flotar(this.elements.length-1);
}

  flotar(pos){

    while (pos>0) {

     let padre= (pos-1)/2; 

      if(this.elements[padre].compareTo(elements[pos]) > 0){

          let aux=elements[pos];
            this.elements[pos] = this.elements[padre];
            this.elements[padre]=aux;
            pos = padre;
        }
      else
          pos=-1;
        
    }

}

  hundir( pos){

  while(pos < this.elements.length / 2){
        let hijo = 2 * pos + 1;
        if(2 * pos+ 2 < this.elements.length && elements[hijo].compareTo(elements[hijo + 1]) > 0)
            ++hijo; 
        if(elements[pos].compareTo(elements[hijo]) > 0){
            let aux=elements[pos];
            elements[pos] = elements[hijo];
            elements[hijo]=aux;
            pos = hijo;
        }
        else pos=this.elements.length;      
   }  
}

 minimo(){    
    return elements[0];
}


  eliminarMin(){
    min=elements[0];
    elements[0]=elements[this.elements.length-1];
    hundir(0);
    return min;
}

}