//Ex1.1 - Yes or No

function boolValueToString(bool){
   return bool === true ?`Yes`:`No`;
   }

   // Ex2.1 - Sum of lowest numbers

   const twoLowestArray = [19, 5, 42, 2, 77];

   function sumOfTwoLowest(array){
      twoLowestArray.sort((a, b)=>a-b);
      return array[0]+array[1];
   }
   console.log(`2.1 Lowest Two:`,sumOfTwoLowest(twoLowestArray));

// CR- Incorrect sorting of the global variable, potential side effects.
// Using slice() (or spread) before sorting prevents modifying the original array.
function sumOfTwoLowest(array) {
	const sortedArray = array.slice().sort((a, b) => a - b);
	return sortedArray[0] + sortedArray[1];
}

// CR - with spread
function sumTwoSmallestNumbers(numbers) {
	const result = [...numbers];
	result.sort((a, b) => a - b);
	return result[0] + result[1];
}

   //Ex2.2 - One and Zero - Binary

   const binaryArray = [1, 1, 0, 0]; 

   function binaryToInteger(array) {                      
      array.reverse();
      const sum = array.reduce((sum,binaryDigit,index) => sum + binaryDigit * Math.pow(2,index));
      return sum;
   }
   console.log(`2.2 Binary to Integer:`,binaryToInteger(binaryArray));

   // Ex2.3 - Find the Next Perfect Square

   const perfectSquare = 625;
 
   function findNextPerfectSqr(number) {       
   // CR - Incorrect: It should use `Math.floor()` for precise integer check.
   // `Math.round()` may incorrectly round close non-integer roots.
      numberRoot = Math.round(Math.sqrt(number));     
      if (number === numberRoot*numberRoot) {
         numberRoot++ 
         number = numberRoot*numberRoot
         return number
      }
      return -1;
   }
   console.log(`2.3 Perfect Square:`,findNextPerfectSqr(perfectSquare));
   
   // Ex2.4 - Unique

   const findUniqArray = [ 1, 1, 1, 2, 1, 1, 1, 1, 1,];

// CR - Inefficient sorting for finding unique value.
   function findUniq(array) {
      if (array.length < 3) {
         console.log(`Array is too small`);
         return;
      }
      array.sort();
      const UniqueNumber = (array[0]===array[1]?array[array.length-1]:array[0]);
      return UniqueNumber;
   }
console.log(`2.4 Unique:`,findUniq(findUniqArray));

// CR- Could use a more direct comparison approach
function findUniq(arr) {
	return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}

// Ex2.5 - Summation

const numberToSum = 8;

function summation(number) {
   if (number > 0) {
      return summation(number-1) + number;
   }
   else{
      return 0
   }
}
console.log(`2.5 Summation:`,summation(numberToSum));

// Ex2.6 - Years and Centuries

const yearNumber = 1800;

function yearToCentury(year) {
   const century = 100;
   return year%century === 0? year/century:Math.floor(year/century)+1;
}
console.log(`2.6 Year to Century:`,yearToCentury(yearNumber));

// Ex2.7 - Basic Math

const number1 = 7;
const operator = `+`
const number2 = 0;

function calculator(value1, char, value2) {
   if ((char!== `+` && char!== `-`&& char!==`*`&& char!== `/`) || (char===`/` && value2===0)) {
      console.log(`Wrong operation`);
      return undefined;
   }
   else{
      // CR - use of eval() is dangerous and should be avoided.      
      return eval(String(value1+char+value2));
   }
}
console.log(`2.7 Calculator = `,calculator(number1,operator,number2));

// CR - Refactor to use a switch statement or a series of if/else for safety.
function calculator(value1, char, value2) {
	if (char === '/' && value2 === 0) {
		throw new Error('Cannot divide by zero');
	}
	switch (char) {
		case '+':
			return value1 + value2;
		case '-':
			return value1 - value2;
		case '*':
			return value1 * value2;
		case '/':
			return value1 / value2;
		default:
			throw new Error('Invalid operator');
	}
}

//Ex3.1 - Growth Of population

const populationLimit = 5000;
const startingPopulation = 1500;
const addingPercent = 5;
const addingYearly= 100;

function yearsToPopulation(limit, start,percent,add) {
   percent = percent/100;
   currentPopulation = start;
   years = 0;

   while (currentPopulation <= limit) {
      currentPopulation = currentPopulation + (currentPopulation * percent) + add;
      years++;
   }
   return years;
}

console.log(`3.1 Years to Population:`,yearsToPopulation(populationLimit,startingPopulation,addingPercent,addingYearly));

// Ex3.2 - People on the Bus

const bus = [[5,0],[4,2],[5,4],[3,8]];
// CR - Bus can start with passengers leaving the bus.
// It's not logical to assume first second value must be zero.
function peopleOnBus(array) {
   if (array[0][1] !== 0) {
   console.log(`Bus can't be already full.`);
   return undefined;
   }
   const peopleAmount = array.reduce((sumOfPeople, stopArray) => {
      return sumOfPeople + (stopArray[0]-stopArray[1]); 
      },0);
   return peopleAmount>= 0 ? peopleAmount : "Can't be negative number."
}

console.log(`3.2 People on Bus:`,peopleOnBus(bus));

// CR - the right solution
function peopleOnTheBus(array) {
	let totalPeople = 0;
	for (let i = 0; i < array.length; i++) {
		totalPeople += array[i][0] - array[i][1];
	}
	return totalPeople;
}

// Ex4.1 - fibonacci -

const n  = 8;

function fib(n) {
   if (n<=1) {
      return n;
   }
   else{
      return fib(n-1)+fib(n-2);
   }
}
console.log(`4.1 The number in n =`,fib(n));

// Ex4.2 - Tribonacci -

 const tribonacciArray = [0,0,1];                
 const nElements = 10;

 function addToTribonacciArray(array, n) {                              //? Is there a better way?
   for (let i = 3; i < n; i++) {
      array[i] = array[i-1] + array[i-2] + array[i-3];
   }
   return array;
 }
 console.log(`4.2 Tribonacci`,addToTribonacciArray(tribonacciArray,nElements));

//  Ex5.1 - trimming string

const untrimmedString = `Hello`;

function trimFirstLastChar(string) {
   if (string.length <= 2) {
      console.log(`String is too short`);
      return;
   }
   return string.substring(1,string.length-1);
}
console.log(`5.1 Trimming a String:`,trimFirstLastChar(untrimmedString));

//Ex5.2 - String Repeat

const stringToRepeat = `Hi`;
const repeatStringNumber = 5;

function stringRepeater(string,number) {
   return string.repeat(number);
}
console.log(`5.2 String Repeat:`,stringRepeater(stringToRepeat,repeatStringNumber));

// Ex5.3 - To Camel Case

const toCamelCase = `the-stealth-warrior`;
// CR - does not handle underscores and keeps them in the string.
// Should replace or remove dash/underscore and capitalize next letter.
function convertToCamelCase(string) {
   string = string.split(``);
   
   for (let char in string) {
      if ( string[char] === `-` || string[char] ===`_`) {
         string.splice(char,1);
         string[char] = string[char].toUpperCase();
      }
   }
   return string.join(``);
}
console.log(`5.3 To Camel Case:`,convertToCamelCase(toCamelCase));

// CR - right solution
function toCamelCase(str) {
	const words = str.split(/-|_/);
	return words
		.map((word, index) => {
			if (index == 0) return word;
			return word[0].toUpperCase() + word.slice(1);
		})
		.join('');
}

//Ex5.4 - To Weird Case


const toWeirdCase = `Weird string case`;
// CR - The logic changes every letter rather than each word's characters.
// Needs to split by words and apply transformation to each word individually.
function convertToWeirdCase(string) {
   string = string.split(``);
   string = string.map((letter, index) => index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase());
   return string.join(``);
}
console.log(`5.4 To Weird Case:`,convertToWeirdCase(toWeirdCase));

// CR - right solution
function toWeirdCase(string) {
	return string
		.split(' ')
		.map(function (word) {
			return word
				.split('')
				.map(function (letter, index) {
					return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase();
				})
				.join('');
		})
		.join(' ');
}

//Ex5.5 - Abbreviate two words

const toInitials = `Artur Abel`;
// CR - Incorrect type checking and the method used; should compare typeof string !== 'string'.
// Incorrect implementation for padding, could result in wrong output.
function convertToInitials(string) {
   emptyString = [];
   string = string.split(` `);
   for (let word of string) {
      emptyString.push(word.charAt(0));
   }
   return emptyString.join(`.`);
}
console.log(`5.5 Abbreviate two words:`,convertToInitials(toInitials));

// CR - right solution
function abbrevName(name) {
	return name
		.split(' ')
		.map((x) => x[0].toUpperCase())
		.join('.');
}

//Ex5.6 - Mask

const unmaskedString = 23434534552;

function maskify(string) {
   if (typeof string !== String) {
      string = string.toString();
   }
   const digits = string.slice(-4);
   string = digits.padStart(string.length,`#`);
   return string;
}  

console.log(`5.6 Mask:`,maskify(unmaskedString));

//Ex5.7 - shortest words

//All real words
const stringOfWords = [`Antidisestablishmentarianism`, `Honorificabilitudinitatibus`, `Spectrophotofluorometrically`, `Xenotransplantation`] 

function shortestWord(stringArray) {

   let shortestWordLength = stringArray[0].length;

   stringArray.forEach(word => {
      wordLength = word.length;
      if (shortestWordLength > wordLength) {
         shortestWordLength = word.length;
      }
   });
   return shortestWordLength;
}

console.log(`5.7 Shortest Word:`,shortestWord(stringOfWords));

//Ex5.8 - shortest words version 2

function longestWord(stringArray) {
      let longestString =  stringArray.reduce((a, b) => { 
      return a = a.length > b.length?a:b 
   });
   return longestString.length;
}

console.log(`5.8 Shortest Word Version 2:`,longestWord(stringOfWords));

// Ex6.1 - Mumbling

const accumString = `RqaEzty`;

function stringMumbling(string) {
    string = string.toUpperCase().split(``);
   
   for (let i = 0; i < string.length; i++) {
      string[i] = string[i]+string[i].repeat(i).toLowerCase();
   }
   return string.join(`-`);
}

console.log(`6.1 Mumbling:`,stringMumbling(accumString));

// Ex6.2 - Counting Duplicates

const stringToCount = "Pseudopseudohypoparathyroidism";

function countRepetitiveChars(string) {
   const obj = {};

   string.split(``).forEach((letter)=>{
      obj[letter] = obj[letter] ? ++obj[letter] :  1;
   } )
   for (const letter in obj) {
      if (obj[letter]<=1) {
         delete obj[letter];
      }
   }
   return obj;
}

console.log(`6.2 Counting Duplicates`,countRepetitiveChars(stringToCount));

// Ex6.3 - organize strings

const string1 =`xyaabbbccccdefww`;
const string2 = `xxxxyyyyabklmopq`;

function organizeStrings(s1, s2) {
   let combinedString = (s1.concat(s2)).toLowerCase();
   combinedString = combinedString.split(``).filter((letter,index)=>combinedString.indexOf(letter)=== index);
   return combinedString.sort().join(``);
}

console.log(`6.3 Organize Strings:`,organizeStrings(string1,string2));

//Ex6.4 - isogram

const isogramString = `Uncopyrightables`;

// CR - The string.split(``) part is incorrect. It should be string.split('') (with single quotes).
// The forEach loop doesn't do anything with the returned value from the callback function. It should be using a different array method like some or every.
// The string.indexOf(letter) !== index condition is not correct for checking if a letter is repeated. It will only catch the first occurrence of a repeated letter.
function checkIsogram(string) {
   let isIsogram = true;

   string = string.toLowerCase();
   string = string.split(``).forEach((letter,index) =>{
      if (string.indexOf(letter) !== index) {
         isIsogram = false;
      }
   })
   return isIsogram; 
}

console.log(`6.4 Isogram`,checkIsogram(isogramString));

// CR - right solutions
function isIsogram(str){
  str = str.toLowerCase();
  let counts = {};
  for(let char of str){
      if(counts[char]){
          return false;
      }
      counts[char] = 1;
  }
  return true;
}

function checkIsIsogram(string) {
  const lowercaseString = string.toLowerCase();
  const charSet = new Set();
  return [...lowercaseString].every(char => {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
    return true;
  });
}

// Ex 8 - Find the Perimeter of a Rectangle

const width = 2;
const length = 9;

function rectanglePerimeter(w,l) {
   return 2*(w+l)
}

console.log(`8 Perimeter of Rectangle:`,rectanglePerimeter(width,length));
