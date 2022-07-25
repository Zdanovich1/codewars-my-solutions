function heron(a, b, c) {
   let s = (a + b + c) / 2;
   return Number(Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2));
}