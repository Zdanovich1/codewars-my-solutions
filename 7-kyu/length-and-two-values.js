function alternate(n, firstValue, secondValue) {
   let resArr = [];
   for (let i = 0; i < n; i++) resArr.push(firstValue, secondValue);
   resArr.length = n;
   return resArr;
}