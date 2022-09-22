/*Given the triangle of consecutive odd numbers:
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
1 -->  1
2 --> 3 + 5 = 8
*/
function rowSumOddNumbers(n) {
   let resArr = [];
   let inArr = [];
   let lenArr = 1;
   let numb = 1;

   for (let i = 0; i < n; i++) {
      for (let j = 0; j < lenArr; j++) {
         inArr.length = lenArr;
         inArr[j] = numb;
         numb += 2;
      }
      lenArr++;
      resArr.push(inArr);
      inArr = [];
   }
   return (resArr[n - 1].reduce((sum, cur) => sum + cur, 0));
}