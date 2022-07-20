function XO(str) {
   let x = 0;
   let o = 0;
   let arr = str.toLowerCase().split('')
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'x') x += 1;
      else if (arr[i] === 'o') o += 1;
   }
   return (x == o) ? true : false;
}
