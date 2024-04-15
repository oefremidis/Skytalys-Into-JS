const colors = ['red', 'green', 'blue', 'magenta', 'cyan'];
const numbers = [10, 20, 30, 40, 50, 60, , 70, 80, 90];

// traditional
//index
// for(let i=0; i<colors.length; i++){
//     console.log(colors[i]);
// }
// // enchanced - data
// for(let value of colors){
//     console.log(value);
// }

// // enchanced - label of each position
// // here all indecies
// for(let value in colors){
//     console.log(value);
// }


// functional operators 
// forEach - terminal
// numbers.forEach(value => console.log(value));
// numbers.forEach((value, i) => console.log(i + '-->' + value));

// filter -- indermediate 
// const filtered = numbers.filter(value => value > 50);
// filtered.forEach(value => console.log(value));

// numbers
//     .filter(value => value > 50)
//     .forEach(value => console.log(value));

// colors
//     .filter(c => c == 'red' || c == 'green')
//     .forEach(value => console.log(value));

// map
// const capitalLetters = colors.map(c => c.toUpperCase());
// capitalLetters.forEach(value => console.log(value));
// console.log(capitalLetters)

// reduce
// const total = numbers.reduce((total, value)=> total + value);
const total = numbers.reduce((acc, value)=> acc + value);
console.log(total)

const mulResult = numbers.reduce((acc, value)=> acc * value, 1);
console.log(mulResult)
