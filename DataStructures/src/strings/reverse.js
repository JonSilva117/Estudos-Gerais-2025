
// The main idea of this exercise is to reverse a simple string. 
// This is something you should be able to do easily in your sleep once that is very common in 
// interview questions.
function reverse(str){
const reversed = str.split('').reverse().join('')
return reversed;
}

var str = "Hello World";
console.log(reverse(str));