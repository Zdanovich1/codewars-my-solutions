/*
Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.
You should remove any duplicate characters, keeping the first occurence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.
Examples
'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False
                   
        --> ['a','b','d']
'DIGEST'--> ['D','I','E','T']
All input will be valid strings of length > 0. Leading zeros in binary should not be counted.
*/
function moreZeros(s) {

   let set = new Set(s.split(''));
   let result = [];

   for (let el of set) {
      let char = el.charCodeAt(0).toString(2);
      let matchOnes = char.match(/1/gi);
      let matchZeros = char.match(/0/gi);
      if (matchZeros == null) continue;
      if (matchZeros.length > matchOnes.length) {
         result.push(el);
      }
   }
   return (result);
}