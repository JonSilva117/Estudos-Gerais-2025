class MyArray {
    constructor(){
        this.length = 0; // the size of the array
        this.data = {}; // the data of the array
    }


   
     get(index){
        item = this.data[ndex]; 
        return item;   
     } // retorna o item do array - O(1) - retorna o item do array

    push(item){
        const newItem = this.data[this.length] = item;
        this.length++; 
        return newItem;
;    }// adiciona um item no final do array - O(1) - adiciona um item no final do array

   pop()
{

    if(this.length === 0 ) return undefined;
    
    const lastItem = this.data[this.length -1 ];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem; 
} // remove o último item do array - O(1) - remove o último item do array

   delete(index){
    const item = this.data[index]; 
    this.shiftItems(index); // chama o método shiftItems para remover o item do array
    return item;
   }

   shiftItems(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1];  
        }
        delete this.data[this.length - 1]; 
        this.length--; 
        

   }



} // Pela regra de Big O, o tempo de execução do método shiftItems é O(n) porque ele precisa percorrer todos os elementos do array para remover o item do meio do array.


const array = new MyArray(); 
array.push(1);
array.push(2);
array.push('Hello');
console.log(array.delete(1));
console.log(array)