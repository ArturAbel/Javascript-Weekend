//Ex1.1 - Yes or No

function boolValueToString(bool){
   return bool === true ?`Yes`:`No`;
   }

   // Ex2.1 - Sum of lowest numbers

   const twoLowestArray = [19, 5, 42, 2, 77];

   function sumOfTwoLowest(numbers) {
      const result = [...numbers];
      result.sort((a, b) => a - b);
      return result[0] + result[1];
   }

   console.log(`2.1 Lowest Two:`,sumOfTwoLowest(twoLowestArray));

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

      numberRoot = Math.floor(Math.sqrt(number));     
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

function findUniq(array) {
   if (array.length < 3) {
      console.log(`Array is too small`);
      return;
   }
   return array.find((n) => array.indexOf(n) === array.lastIndexOf(n));
}
console.log(`2.4 Unique:`,findUniq(findUniqArray));

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
console.log(`2.7 Calculator = `,calculator(number1,operator,number2));

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

function peopleOnTheBus(array) {
	let totalPeople = 0;
	for (let i = 0; i < array.length; i++) {
		totalPeople += array[i][0] - array[i][1];
	}
	return totalPeople;
}
console.log(`3.2 People on Bus:`,peopleOnTheBus(bus));

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

 function addToTribonacciArray(array, n) {                              
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

const camelString = `the-stealth-warrior`;

function toCamelCase(str) {
	const words = str.split(/-|_/);
	return words.map((word, index) => {
			if (index == 0) return word;
			return word[0].toUpperCase() + word.slice(1);
		}).join('');
}

console.log(`5.3 To Camel Case:`,toCamelCase(camelString));

//Ex5.4 - To Weird Case

const weirdString = `Weird string case`;

function toWeirdCase(string) {
	return string.split(' ').map(function (word) {
			return word.split('').map(function (letter, index) {
					return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase();
				}).join('');
		}).join(' ');
}
console.log(`5.4 To Weird Case:`,toWeirdCase(weirdString));

//Ex5.5 - Abbreviate two words

const toInitials = `Artur Abel`;

function abbrevName(name) {
	return name.split(' ').map((x) => x[0].toUpperCase()).join('.');
}

console.log(`5.5 Abbreviate two words:`,abbrevName(toInitials));

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

console.log(`6.4 Isogram`,isIsogram(isogramString));

// Ex 8 - Find the Perimeter of a Rectangle

const width = 2;
const length = 9;

function rectanglePerimeter(w,l) {
   return 2*(w+l)
}

console.log(`8 Perimeter of Rectangle:`,rectanglePerimeter(width,length));
