## Rot13

![image](https://user-images.githubusercontent.com/99033220/173763111-f626c4ba-db9c-4c14-9e7e-f0908f8b5bc4.png)

---

#### `My Solution`
```JavaScript
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
    
  return message.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
}

```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

// Solution 2
const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));

// Solution 3
var codeA = 'A'.charCodeAt(0),
    codeZ = 'Z'.charCodeAt(0),
    codea = 'a'.charCodeAt(0),
    codez = 'z'.charCodeAt(0);
function rot13(message){
  return message.split('').map(function(char) { 
    var code = char.charCodeAt(0);
    if(codeA <= code && code <= codeZ){
      return String.fromCharCode(((code - codeA) + 13) % 26 + codeA);
    } else if(codea <= code && code <= codez){
      return String.fromCharCode(((code - codea) + 13) % 26 + codea);
    }
    return char;
  }).join('');
}
```
