// const orders = [
//     { amount: 250 },
//     { amount: 400 },
//     { amount: 100 },
//     { amount: 325 }
//   ];

//   let sum = orders.reduce(function (value1, value2){

//     return value1 + value2;

//   }, 0)

//   console.log(sum);
console.log("-----------------ONE----------------");

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];
const total = orders.reduce((total, item) => {
  return total + item.amount;
}, 0);
console.log(total);

console.log("-----------------TWO----------------");

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const newArray = arrayOfNumbers.map((item) => item + 1);

console.log(newArray);

console.log("-----------------THREE----------------");

function filterEvens(arr) {
  let evenNumbers = arr.filter((item) => item % 2 === 0);
  console.log(evenNumbers);
}

filterEvens([1, 2, 3, 11, 12, 13]);
filterEvens([22, 2, 31, 110, 6, 13]);

console.log("-----------------FOUR----------------");

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
function filterItems(arr, letter) {
  const items = arr.filter((item) => item.includes(letter)).map(item => item[0].toUpperCase() + item.slice(1));
  return items;
}
console.log(filterItems(friends, "ka")); // ["Rika"];
console.log(filterItems(friends, "e")); // ["Jenna", "Bleda", "Oliver"];

console.log("-----------------FIVE----------------");

function sum(array) {
  const totalNum = array.reduce((total, item) => total + item);
  console.log(totalNum);
}
sum([1, 2, 3, 4, 5]); //returns 15
sum([6, 7, 7]); //returns 20

console.log("-----------------SIX----------------");

const sqrArray = [8, 6, 42, 12];

const sqrNum = sqrArray.map((item) => item * item);

console.log(sqrNum);





