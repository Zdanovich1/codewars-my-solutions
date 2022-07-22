function isValidWalk(walk) {
   if (walk.length !== 10) return false;

   let n = 0;
   let s = 0;
   let e = 0;
   let w = 0;

   for (let i = 0; i < walk.length; i++) {
      switch (walk[i]) {
         case 'n':
            n++;
            break;
         case 's':
            s++;
            break;
         case 'e':
            e++;
            break;
         case 'w':
            w++;
            break;
      }
   }
   return (n == s && e == w) ? true : false;
}