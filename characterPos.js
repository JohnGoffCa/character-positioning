function countLetters(string) {
  var str = string.toLowerCase();
  var result = {};
  for (var i = 0; i < str.length; i++) {
    if (result.hasOwnProperty(str[i])) 
      result[str[i]].push(i);
    else 
      result[str[i]] = [i];
  }
  return result;
}

console.log(countLetters("Hello World"));
console.log(countLetters("Lighthouse in the housell"));
