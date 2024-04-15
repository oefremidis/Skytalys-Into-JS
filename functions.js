// -----------------------------------------
// function declaration

// function sum(a, b){
// function sum(a = 0, b = 0) { // with default values
//     return a + b
// }

// console.log(sum());
// console.log(sum(5));
// console.log(sum(5, 3));

// console.log(typeof NaN)

// console.log(sum);
// const total = sum;
// console.log(total);
// console.log(total(66, 77))

// -----------------------------------------
// expression function
// const total = function sum(a, b) { 
// const total = function (a, b) {  // anonymous 
//     return a + b;
    
// };

// console.log(total)
// console.log(total(3, 4))

// -----------------------------------------
// ES6 +
// fat arrow function

// const total = (a, b) => a + b;
    
// console.log(total)
// console.log(total(3, 4))

// const square = x => x ** 2;

// console.log(square);
// console.log(square(5));

// -----------------------------------------
// high order functions & callbacks

const isPos = a => a > 0;  
const isZero = a => a === 0;

function execution(f){
    console.log(f);
    const value = 10;
    // go and get data from a site....
    console.log(f(value))
}

// execution(5)
execution(isPos);
execution(isZero);

execution(a => a > 0); // using callbacks

// --------------------------
function doSomething(){
    // ... do things ...
    return function doSomethingMore(a){
        return a ** 2;
    }
}

console.log(doSomething)
const d = doSomething();
console.log(d(10));


