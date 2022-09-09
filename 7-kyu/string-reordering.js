/*
The input will be an array of dictionaries.
Return the values as a string - seperated sentence in the order of their keys' integer equivalent (increasing order).
The keys are not reoccurring and their range is - 999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.

Example
Input:
List = [
   { '4': 'dog' }, { '2': 'took' }, { '3': 'his' },
   { '-2': 'Vatsan' }, { '5': 'for' }, { '6': 'a' }, { '12': 'spin' }
]
Output:
'Vatsan took his dog for a spin'
*/
function sentence(List) {
   let resultArr = [];

   let arrKey = List.map(obj => {
      for (let key in obj) {
         return key;
      }
   }).map(el => el = Number(el)).sort((a, b) => a - b).map(item => item = String(item));

   for (let i = 0; i < arrKey.length; i++) {
      for (let j = 0; j < List.length; j++) {
         if (arrKey[i] in List[j]) resultArr.push(List[j][arrKey[i]]);
      }
   }
   return resultArr.join(' ');
}