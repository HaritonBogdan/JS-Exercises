function caractereUnice(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (result.indexOf(str[i]) === -1) {
      result += str[i];
    }
  }

  return result;
}

console.log(caractereUnice("aabbcc"));
console.log(caractereUnice("hello world"));
console.log(caractereUnice("javascript"));
