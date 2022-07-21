function alphabetPosition(text) {
   let alphabet = 'abcdefghijklmnopqrstuvwxyz'
   let result = [];

   for (let i = 0; i < text.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
         if (text[i].toLowerCase() === alphabet[j]) {
            result.push(j + 1)
         }
      }
   }

   return (result.join(' '))
}