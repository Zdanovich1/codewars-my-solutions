function arrayDiff(a, b) {
   let resArr = [];
   let count = 0;
   for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
         if (a[i] === b[j]) {
            count += 1;
         }
      }
      if (count == 0) resArr.push(a[i]);
      count = 0;
   }
   return resArr;
}