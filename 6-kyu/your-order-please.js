function order(words) {
   let arr = words.split(' ')
   let result = [];

   for (let i = 0; i < arr.length; i++) {
      let ind = String(i + 1)
      for (let j = 0; j < arr.length; j++) {
         let elemArr = arr[j].split('');
         if (elemArr.includes(ind)) result.push(arr[j])
      }
   }
   return (result.join(' '))
}