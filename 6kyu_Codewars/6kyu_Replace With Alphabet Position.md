## Replace With Alphabet Position
![image](https://user-images.githubusercontent.com/99033220/174966553-15b779bc-5d75-4a8c-9a44-57eecb170aca.png)
---
#### `My Solution`
```JavaScript
function alphabetPosition(text) {
  let index = [];
  const alphabet =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const str = text.toLowerCase().replace(/\s+/g, "").split("");
  
  str.forEach((elem) => {
    if(alphabet.includes(elem) ==  true) {
      let same = alphabet.indexOf(elem)+1;
      index.push(same);
    }
  })
  return index.join(" ");
}
```

#### `Top 3 Solution`
```JavaScript
// Solution 1
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}

// Solution 2
function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}

// Solution 3
let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');
```
