/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
   const al = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   let arr = x.split(" ");
   let result = [];
   let resInd = 0;

   for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('');
      for (let j = 0; j < arr[i].length; j++) {
         resInd += al.indexOf(arr[i][j]) + 1;
      }
      result.push(resInd)
      resInd = 0;
   }

   return (arr[result.indexOf(Math.max.apply(null, result))].join(''));
}