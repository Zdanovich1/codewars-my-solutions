function positiveSum(arr) {
   return arr.filter(item => item > 0).reduce((sum, current) => sum + current, 0)
}