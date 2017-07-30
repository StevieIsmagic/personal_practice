const numbers = [1,4,9,25,36];
const colors = ['red','blue','green','white'];
const person = { name: 'jon', age: 23, eyeColor: 'blue', smoke: false};

// >>>> MAP

// var new_array = arr.map(function callback(currentValue, index, array) {
//     // Return element for new_array
// }[, thisArg])

// >> PARAMETERS

// callback:
// Function that produces an element of the new Array, taking three arguments: 
// currentValue:
// The current element being processed in the array.
// index:
// The index of the current element being processed in the array.
// array:
// The array map was called upon.
// thisArg Optional: 
// Value to use as this when executing callback.
// Return value:
// A new array with each element being the result of the callback function.

// >> EXAMPLES

console.time('performance analysis');

let squareRoots = numbers.map((num) => {
	return Math.sqrt(num);
});

console.log(squareRoots);
console.log('>>>>');

let newNums = numbers.map((num) => {
  return num * num; 
});
console.log(newNums);
console.log('>>>>');



console.timeEnd('performance analysis');