function solution(str) {
   let resArr = [];
   for (let i = 0; i < str.length; i++) {
      resArr.push(str[i] + str[i + 1]);
      i++;
   }
   if (str !== '') resArr[resArr.length - 1] = resArr[resArr.length - 1].replace(/undefined/i, '_');
   return resArr;
}