## Where my anagrams at?

![image](https://user-images.githubusercontent.com/99033220/173719246-f6424508-b5ae-4854-812d-f7f1f2a495c5.png)

---
#### `My Solution`
```JavaScript
// Solution 1: Using .map
function anagrams(word, words) {
   let arr = [];
  
  // Words arranging alphabetically
  function x(e) {
    return e.split("").sort().join("");
  }
  
  const newWord = x(word);
  const newWords = words.map((elem) => {
    return x(elem)
  });
  
  const y = newWords.map((elem, index, array) => {
    if (elem == newWord) {
      arr.push(words[index])
    }
  })  

  return arr;
}

//////////////////////////////////////////////
// Solution 1: Using .forEach
function anagrams(word, words) {
   let arr = [];
  
  // Words arranging alphabetically
  function x(e) {
    return e.split("").sort().join("");
  }
  
  const newWord = x(word);
  const newWords = words.map((elem) => {
    return x(elem)
  });
  
  const y = newWords.forEach((elem, index) => {
      if(elem == newWord) {
          arr.push(words[index])
      }
  })
  
  return arr;
}
```
----
#### `Top 3 Solution`
```JavaScript
// Solution 1
String.prototype.sort = function() {
  return this.split("").sort().join("");
};

function anagrams(word, words) {
  return words.filter(function(x) {
      return x.sort() === word.sort();
  });
}

// Solution 2
function anagrams(word, words) {
  word = word.split('').sort().join('');
  return words.filter(function(v) {return word == v.split('').sort().join('');});
}

// Solution 3
function anagrams(word, words) {
    return words.filter(function (e) {
        return e.split('').sort().join('') === word.split('').sort().join('');
    })
}
```




