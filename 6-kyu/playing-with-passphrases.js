/*
Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:
choose a text in capital letters including or not digits and non alphabetic characters,
shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1
1 + 2 + 3 -> "CPSO JO 7984!"
4 "CpSo jO 7984!"
5 "!4897 Oj oSpC"
With longer passphrases it's better to have a small and easy program. Would you write it?
https://en.wikipedia.org/wiki/Passphrase
*/
function playPass(s, n) {
   const alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
   const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
   let arr = s.split('');

   for (let i = 0; i < arr.length; i++) {

      if (alph.includes(arr[i])) {
         if (alph.indexOf(arr[i]) + n > alph.length - 1) {
            arr[i] = alph[alph.indexOf(arr[i]) + n - alph.length];
         } else {
            arr[i] = alph[alph.indexOf(arr[i]) + n];
         }
      }

      if (numbers.includes(arr[i])) {
         arr[i] = 9 - arr[i];
      }
   }
   return (arr.map((el, ind) => (ind % 2 !== 0) ? el.toString().toLowerCase() : el).reverse().join(''));
}