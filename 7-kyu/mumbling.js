function accum(s) {
   return s.toLowerCase().split('').map((el, ind) => el.repeat(ind + 1)).map(item => item[0].toUpperCase() + item.slice(1, item.length)).join('-')
   }