function formatDuration(seconds) {

   let years = Math.floor(seconds / 31536000);
   let sec = seconds % 31536000;
   let days = Math.floor(sec / 86400);
   sec = seconds % 86400;
   let hours = Math.floor(sec / 3600)
   sec = sec % 3600;
   let minuts = Math.floor(sec / 60)
   sec = sec % 60;
   let result = [];
   let res = [];
   let str;

   let times = ['year,', 'day,', 'hour,', 'minute', 'second']
   let mulpiple = ['years,', 'days,', 'hours,', 'minutes', 'seconds']

   if (seconds === 0) {
      return ('now')
   }

   result.push(years)
   result.push(days)
   result.push(hours)
   result.push(minuts)
   result.push(sec)

   let resArr = [];

   for (let i = 0; i < result.length - 1; i++) {
      if (result[i] !== 0) {
         if (result[i] > 1) {
            resArr.push(`${result[i]} ${mulpiple[i]}`)
         } else if (result[i] = 1) {
            resArr.push(`${result[i]} ${times[i]}`)
         }
      }
   }

   if (result[result.length - 1] !== 0) {
      if (result[result.length - 1] > 1) {
         resArr.push(`and ${result[result.length - 1]} ${mulpiple[result.length - 1]}`)
      } else if (result[result.length - 1] = 1) {
         resArr.push(`and ${result[result.length - 1]} ${times[result.length - 1]}`)
      }
   }

   let resultString = resArr.join(" ")
   let arr1 = resultString.split('')

   if (arr1[arr1.length - 1] === ',') {
      arr1.pop()
   }

   if (arr1[0] === 'a') {
      arr1.splice(0, 4)
   }

   let res1 = arr1.join('');
   let arr2 = res1.split(' ')

   if (arr2[arr2.length - 1] == 'minute' || arr2[arr2.length - 1] == 'minutes') {
      let arr3 = res1.split('')

      let ind = arr3.lastIndexOf(',')

      if (ind !== -1) {
         arr3.splice(ind, 1, ' and')
         return (arr3.join(''))
      }

   }

   return (arr2.join(' '))

}