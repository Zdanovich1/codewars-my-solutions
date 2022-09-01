function towerBuilder(nFloors) {

   let arr = [];
   let count = 1;
   let symbol = '*';

   for (let i = 1; i <= nFloors; i++) {
      arr.push(symbol.repeat(count));
      count = count + 2;
   }

   for (let j = 0; j < arr.length; j++) {
      let spaceCount = ((count - 2) - arr[j].length) / 2;
      arr[j] = " ".repeat(spaceCount) + arr[j] + " ".repeat(spaceCount);
   }
   return arr;
}