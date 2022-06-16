## Simple Pig Latin

![image](https://user-images.githubusercontent.com/99033220/173489364-49a5c2c5-97ad-456a-b0ad-7cfd24933b31.png)

---
#### `My Solution`
```JavaScript
function pigIt(str) {
  const arr = str.split(' ');
  const x = arr.map((word) => {
      return word.match(/[[A-z]/gi) ? `${word.substr(1)}${word.substr(0, 1)}ay`: word;
  })
 return x.join(" ")
}
```
---

#### `Top 3 Solution`
```JavaScript
// Solution 1
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

// Solution 2
function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}

// Solution 3
function pigIt(str) {
  var arrayWord = str.split(' ');
  return arrayWord.map(function(word) {
    var firstLetter = word.charAt(0);
    return word.slice(1) + firstLetter + 'ay';
  }).join(' ');
}

```
