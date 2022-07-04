var number = function (busStops) {
   let result = 0;
   for (let i = 0; i < busStops.length; i++) {
      result = result + busStops[i][0] - busStops[i][1];
   }
   return result
}