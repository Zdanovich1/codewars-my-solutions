function toCamelCase(str) {
   let arr = str.split('');
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '-' || arr[i] === '_') {
         arr.splice(i, 2, arr[i + 1].toUpperCase());
      }
   }
   return arr.join('');
}