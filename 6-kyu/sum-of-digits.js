let res;
function digital_root(n) {
   res = String(n).split('').reduce((sum, current) => sum + +current, 0)
   if (res - 10 >= 0) digital_root(res)
   return res
}