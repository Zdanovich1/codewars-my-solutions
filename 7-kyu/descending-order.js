function descendingOrder(n) {
   return +String(n).split('').sort((a, b) => a - b).reverse().join('')
}