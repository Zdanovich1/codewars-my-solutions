function getSum(a, b) {
   let diff;

   if (b > a) {
      diff = b - a;
   } else {
      diff = a - b;
   }
   let arr = []

   for (let i = 0; i < diff + 1; i++) {
      if (b > a) {
         arr.push(a);
         a++;
      } else {
         arr.push(a);
         a--;
      }
   }
   return arr.reduce((sum, cur) => sum + cur, 0);
}