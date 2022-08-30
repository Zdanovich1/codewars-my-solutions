function pigIt(str) {
   let arr1 = str.split(' ');
   const eng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   for (let i = 0; i < arr1.length; i++) {
      arr1[i] = arr1[i].split('');
      if (arr1[i].length === 1 && eng.includes(arr1[i][0].toLowerCase(), 0)) {
         arr1[i][0] = `${arr1[i][0] + 'ay'}`
      }
      if (arr1[i].length > 1) {
         arr1[i].push(`${arr1[i][0]}ay`);
         arr1[i].shift();
         arr1[i] = arr1[i].join('')
      }
   }
   return arr1.join(' ');
}