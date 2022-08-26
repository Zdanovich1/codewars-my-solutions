function validatePIN(pin) {
   if (pin.trim().length == 4 || pin.trim().length == 6) {
      if (!pin.includes('e', 0) && !pin.includes('+', 0) && !pin.includes('\n', 0) && !pin.includes('E', 0) && !pin.includes('.', 0) && Number(pin) >= 0) {
         return true;
      } else {
         return false;
      }
   } else {
      return false;
   }
}