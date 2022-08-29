function moveZeros(arr) {
   let resArr = [];
   let zeroArr = [];

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
         resArr.push(arr[i]);
      } else {
         zeroArr.push(arr[i]);
      }
   }
   return resArr.concat(zeroArr);
}