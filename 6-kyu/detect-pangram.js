function isPangram(string) {
   const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
   for (let i = 0; i < alph.length; i++) {
      if (!string.toLowerCase().includes(alph[i])) return false;
   }
   return true;
}