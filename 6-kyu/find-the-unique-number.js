function findUniq(arr) {
   let newArr = [... new Set(arr)];
   let count = 0;
   for (let i = 0; i < newArr.length; i++) {
      for (let j = 0; j < 3; j++) {
         if (newArr[i] === arr[j]) {
            count++;
         }
      }
      if (count > 1) return newArr[i + 1];
      else return newArr[i];
   }
}