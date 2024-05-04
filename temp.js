const binaryArray = [1, 1, 0, 0]; 

function binaryToInteger(array) {                      
   array.reverse();
   const sum = array.reduce((sum,binaryDigit,index) => sum + binaryDigit * Math.pow(2,index));
   return sum
}
console.log(`2.2 Binary to Integer:`,binaryToInteger(binaryArray));

