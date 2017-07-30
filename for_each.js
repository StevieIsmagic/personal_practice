var colors = ['red','blue','green','white'];
var person = { name: 'jon', age: 23, eyeColor: 'blue', smoke: false};

// >>>> FOR_EACH

// arr.forEach(function callback(currentValue, index, array) {
//     //your iterator
// }[, thisArg]);

// >> PARAMETERS

// callback:
// Function to execute for each element, taking three arguments:
// currentValue:
// The value of the current element being processed in the array.
// index:
// The index of the current element being processed in the array.
// array:
// The array that forEach() is being applied to.
// thisArg (Optional):
// Value to use as this (i.e the reference Object) when executing callback.

// >> EXAMPLES: ARRAY / OBJECT

// colors.forEach(function(CurrentValue, Key/Index, entire Object/Array){	
// });

// Object.keys(person).forEach(function(item, index, items) {
// 	console.log("key: " + index + ", value: " + item);
// 	console.log('>>>>');
// 	console.log("object person " + item);
// 	console.log('>>>>');
// 	console.dir(items);
// 	console.log('done');
// });

// Object.keys(person).forEach((key) => {
// 	console.log(person[key]);
// 	console.log(">>>");
// 	//console.log("key: " + key + ", value: " + value);
// 	// console.log('index: ' + index);
// 	// console.log('>>>');
// 	// console.log(o);  
// });

>>>> MAP

var new_array = arr.map(function callback(currentValue, index, array) {
    // Return element for new_array
}[, thisArg])

>> PARAMETERS

callback:
Function that produces an element of the new Array, taking three arguments: 
currentValue:
The current element being processed in the array.
index:
The index of the current element being processed in the array.
array:
The array map was called upon.
thisArg Optional: 
Value to use as this when executing callback.
Return value:
A new array with each element being the result of the callback function.

>> EXAMPLES



