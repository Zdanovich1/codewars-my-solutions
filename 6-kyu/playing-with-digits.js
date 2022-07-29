function digPow(n, p) {
   let arr = n.toString().split('');

   for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] ** p;
      p++;
   }

   let res = arr.reduce((sum, cur) => sum + cur, 0);
   let k = res / n;

   return Number.isInteger(k) ? k : -1;
}