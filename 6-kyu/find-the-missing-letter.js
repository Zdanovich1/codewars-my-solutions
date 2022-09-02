/*
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:
['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
*/

function findMissingLetter(array) {
   const eng = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
   let ind = eng.indexOf(array[0], 0);
   let subStr = eng.slice(ind, array.length + ind);
   for (let i = 0; i < subStr.length; i++) {
      if (!array.includes(subStr[i])) return subStr[i];
   }
}