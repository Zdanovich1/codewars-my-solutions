function getCount(str) {
   let count = 0;
   let vowels = 'aeiou';
   for (let i = 0; i < str.length; i++) {
      alert(str[i])
      for (let j = 0; j < vowels.length; j++) {
         if (str[i] === vowels[j]) count += 1;
      }
   }
   console.log(count);
   return count;
}