function bingo(ticket, win) {

   let numbOfMiniWin = 0;

   for (let i = 0; i < ticket.length; i++) {

      for (let j = 0; j < ticket[i][0].length; j++) {
         if (ticket[i][0][j].charCodeAt(0) === ticket[i][1]) {
            numbOfMiniWin += 1;
            break
         }
      }
   }

   if (numbOfMiniWin >= win) {
      return 'Winner!'
   } else {
      return 'Loser!'
   }
}