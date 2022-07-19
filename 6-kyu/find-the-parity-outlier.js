function findOutlier(integers) {
   let odd = integers.filter(item => item % 2 !== 0)
   let even = integers.filter(item => item % 2 == 0)

   return odd.length == 1 ? odd[0] : even[0]
}