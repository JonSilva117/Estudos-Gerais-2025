const strings = ['a', 'b', 'c', 'd']
//4*4  = 16 bites of storage 

strings[2] // access the third element in the array  

// some operations on arrays

///push - allows us to add an element to the end of the array 

strings.push('e') // adds 'e' to the end of the array


// pop - allows us to remove the last element from the array

strings.pop(); // removes 'e' from the end of the array

// unshift  - allows us to add an element to the beginning of the array

strings.unshift('z') // adds 'z' to the beginning of the array


// splice - allows us to add or replace elements in the array at a specific index

strings.splice(2, 0, 'alien') // adds 'alien' at index 2 without removing any elements

console.log(strings)

// cd "c:\Dev\Estudos-Gerais-2025\DataStructures\src\arrays"
