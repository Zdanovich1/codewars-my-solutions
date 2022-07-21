function persistence(num) {
   let count = 0;
   let strArr = String(num)
   while (strArr.length > 1) {
      strArr = strArr.split('').reduce((cur, mult) => cur * mult, 1).toString();
      count += 1;
   }
   return (count);
}