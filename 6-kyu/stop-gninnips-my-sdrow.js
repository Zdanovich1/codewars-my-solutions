function spinWords(string) {
   let resArr = [];
   let arrStr = string.split(' ');

   arrStr.map((item, index) => {
      if (item.length < 5) {
         resArr.push(item)
      } else if (item.length >= 5) {
         resArr.push(item.split('').reverse().join(''));
      }
   })
   return (resArr.join(' '));
}