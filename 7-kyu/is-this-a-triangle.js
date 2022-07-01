function isTriangle(a, b, c) {
   if (a <= 0 || b <= 0 || c <= 0) {
      console.log('false')
      return false
   }

   if (a < b + c && b < a + c && c < a + b) {
      console.log('true')
      return true
   } else {
      console.log('false')
      return false;
   }

}