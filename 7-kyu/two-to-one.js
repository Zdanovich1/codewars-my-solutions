function longest(s1, s2) {
   let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   let res = [];
   let line = s1 + s2;

   for (let i = 0; i < arr.length; i++) {
      if (line.includes(arr[i])) {
         res.push(arr[i]);
      }
   }
   return (res.join(''));
}