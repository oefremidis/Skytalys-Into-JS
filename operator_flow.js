// arithmetic operators
let a = 5;
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

b = a++; // b = a; a = a + 1; // --
console.log(a, b);

b = ++a; // a = a + 1; b = a; // --
console.log(a, b);

a--; --a; // same
a++; ++a  // same

// // > >= < <= == === != !==
console.log(5 < 3)

console.log(5 == "5"); // true only value
console.log(5 === "5");  // false value and type
console.log(5 === 5);
console.log(5 === 5.0);
console.log(true == 1);
console.log('true' == 1);
console.log(true === 1);


// if (a < b) then return a else return  b
console.log(a < b ? a : b);


if (a > b) {
  console.log(a);
} else if (a < b) {
  console.log(b);
} else {
  console.log("=");
}
  

if (a < b && ++b > 0) {
  console.log(a);
} else {
  console.log(b);
}
  

switch (a) {
  case 3:
      console.log("3"); break;
  case 5:
      console.log("5"); break;
  case 7:
      console.log("7"); break;
  default:
      console.log("Error...");
}
  
month = "Jan";
switch (month) {
  case "Jan":
  case "Mar":
  case "May": console.log(31); break;
  case "Apr":
  case "Jun":
  case "Aug": console.log(30); break;
  default:
      console.log(27);
}

i = 6;
while (i < 5) {
  console.log(i);
  i++;
}

for (let j = 0; j < 5; j++) {
  console.log(j);
}
  
let k = 6;
do {
  console.log(k);
  k++;
} while (k < 5);



