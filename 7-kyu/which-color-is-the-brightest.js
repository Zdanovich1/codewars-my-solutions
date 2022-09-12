/*
One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.
One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:
V = max(R,G,B)
You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!
For example,
brightest(["#001000", "#000000"]) == "#001000"
brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
If there are multiple brightest colors, return the first one:
brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"
Note that both input and output should use upper case for characters A, B, C, D, E, F.
*/
function brightest(colors) {
   let arr = colors.slice(0);

   for (let i = 0; i < arr.length; i++) {
      let reg = new RegExp(`${arr[i]}`, 'ig');
      arr[i] = arr[i].replace(reg, `${arr[i][1]}${arr[i][2]} ${arr[i][3]}${arr[i][4]} ${arr[i][5]}${arr[i][6]}`).split(' ');

      for (let j = 0; j < arr[i].length; j++) {
         arr[i][j] = parseInt(`${arr[i][j]}`, 16);
      }
   }
   let max = arr.map(el => Math.max.apply(null, el));
   return colors[max.indexOf(Math.max.apply(null, max))];
}