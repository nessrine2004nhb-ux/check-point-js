
function reverseString(str) {
  return str.split('').reverse().join('');
}

function countCharacters(str) {
  return str.length;
}


function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}


function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}


function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}
function filterArray(arr, conditionFn) {
  return arr.filter(conditionFn);
}
function factorial(n) {
  if (n < 0) return undefined; 
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}


function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}


function fibonacci(n) {
  const sequence = [];
  let [a, b] = [0, 1];
  for (let i = 0; i < n; i++) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }
  return sequence;
}


console.log('--- String Functions ---');
console.log(reverseString('Hello World'));           
console.log(countCharacters('Hello World'));          
console.log(capitalizeWords('the quick brown fox')); 

console.log('\n--- Array Functions ---');
const numbers = [4, 2, 9, 1, 7, 5];
console.log('Max:', findMax(numbers));              
console.log('Min:', findMin(numbers));                
console.log('Sum:', sumArray(numbers));               
console.log('Even numbers:', filterArray(numbers, n => n % 2 === 0)); // [4, 2]
console.log('\n--- Mathematical Functions ---');
console.log('5! =', factorial(5));                    
console.log('Is 17 prime?', isPrime(17));              
console.log('Is 18 prime?', isPrime(18));              
console.log('Fibonacci (8 terms):', fibonacci(8));    

