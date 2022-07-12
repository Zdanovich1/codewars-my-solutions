function pidgeyCalc(pidgeys, candy) {

   let xp = 0;
   candy = candy + (pidgeys - 1);

   let round = Math.floor(candy / 12);
   for (let i = 0; i < pidgeys; i++) {
      candy = candy - 12;
      xp = xp + 500;
      if (candy < 12) {
         return xp;
         break
      }
   }
   return xp;
}