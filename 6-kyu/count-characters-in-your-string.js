/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.
*/
function count(str) {
   let set = new Set(str.split(''));
   let count = 0;
   let res = {};

   for (let char of set) {
      for (let i = 0; i < str.length; i++) {
         if (char === str[i]) {
            count++;
         }
      }
      res[char] = count;
      count = 0;
   }
   return res;
}

