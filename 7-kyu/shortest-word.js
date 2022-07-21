function findShort(s) {
   let result = s.split(' ').sort((a, b) => {
      if (a.length > b.length) return 1;
      if (a.length == b.length) return 0;
      if (a.length < b.length) return -1;
   })
   return result[0].length
}