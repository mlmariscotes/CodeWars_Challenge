## Duplicate Encoder
![image](https://user-images.githubusercontent.com/99033220/174514343-6d3eb7dd-f3f3-44c0-81e1-2bbb505ef178.png)

---
#### `My Solution`
```JavaScrip
function duplicateEncode(word) {
    const words = word.toLowerCase().split("");
    let dup =  words.map((elem, index, arr) => {
          return arr.indexOf(elem) === arr.lastIndexOf(elem) ? "(" : ")" 
      }).join("");
      
    return dup;
}
```
---
#### `Test Data`
```JavaScript
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Duplicate Encoder", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(duplicateEncode("din"),"(((");
    assert.strictEqual(duplicateEncode("recede"),"()()()");
    assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
    assert.strictEqual(duplicateEncode("(( @"),"))((");
  });
});
```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

// Solution 2
function duplicateEncode(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;
}

// Solution 3
function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}

```
