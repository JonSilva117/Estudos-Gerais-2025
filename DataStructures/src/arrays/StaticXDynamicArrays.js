class MyArray {
    constructor(){
        this.length = 0; // the size of the array
        this.data = {}; // the data of the array
    }


    get(index){
        return(this.data[index]);
    } // pega um elemento do array pelo index - O(1) - pega um item do array pelo index

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    } // adiciona um novo item ao final do array - O(1) - add um item no final do array

   pop(){
    const lastItem = this.data[this.length - 1]; 
    delete this.data[this.length - 1];
    this.length--;
    return lastItem
   } // O(1) - remove o último item do array

   delete(index){
    const item = this.data[index];
    this.shiftItems(index);

    return item;
   }

   shiftItems(index){
    for(let i = index; i < this.length - 1; i++){
         this.data[i] = this.data[i + 1]; // move o item da direita para a esquerda

    }
        delete this.data[this.length - 1]; // remove o último item do array
        this.length--; // decrementa o tamanho do array

   }

} // Pela regra de Big O, o tempo de execução do método shiftItems é O(n) porque ele precisa percorrer todos os elementos do array para remover o item do meio do array.

const array = new MyArray(); 
array.push(1);
array.push(2);
array.push('Hello');
console.log(array.delete(1));
console.log(array)