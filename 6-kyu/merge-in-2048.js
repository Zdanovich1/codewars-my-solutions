function merge(line) {
   let arr = line.filter(a => a)
   let resArr = [];

   for (let i = 0; i < line.length; i++) {

      if (arr[i] === arr[i + 1]) {
         resArr.push(arr[i] + arr[i + 1])
         i++
      } else {
         resArr.push(arr[i])
      }
   }

   return line.map((elem, index) => resArr[index] || 0)

};