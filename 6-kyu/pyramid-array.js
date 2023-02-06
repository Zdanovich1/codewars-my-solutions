/*
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s
*/
function pyramid(n) {
   let unit = 1;
   let result = [];
   let innerArr = [];

   for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
         innerArr.push(unit);
      }
      result.push(innerArr)
      innerArr = [];
   }
   return (result);
}