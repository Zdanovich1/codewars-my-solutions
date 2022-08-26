function isCoprime(x, y) {
   let arrX = [];
   let arrY = [];

   for (let i = 0; i <= x; i++) {
      if (x % i === 0) arrX.push(i);
   }

   for (let j = 0; j <= y; j++) {
      if (y % j === 0) arrY.push(j);
   }

   for (let i = 1; i < arrX.length; i++) {
      for (let j = 0; j <= y; j++) {
         if (arrX[i] === arrY[j]) {
            return false;
         }
      }
   }
   return true;

}