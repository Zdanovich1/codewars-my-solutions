function maskify(cc) {
   let arr = [];
   let res = cc.split('');
   let arr2 = res.slice(-4);
   for (let i = 0; i < res.length - 4; i++) {
      arr.push('#');
   }
   return (arr.join('') + arr2.join(''));
}