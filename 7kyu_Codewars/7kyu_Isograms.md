## Isograms
![image](https://user-images.githubusercontent.com/99033220/174693766-e4b25ad3-fc1d-4810-9ff5-8205159e9804.png)
---
#### `My Solution`
```JavaScript
function isIsogram(str){
  let count = 0;
  let x = str.toLowerCase().split("").sort();
  
  for(let i = 0; i < x.length; i++) {
    if(x[i] == x[i + 1]) {
      count += 1
    }
  }  
  return (count == 0) ? true : false;  
}
```
---
#### `Test Data`
```JavaScript
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual( isIsogram("Dermatoglyphics"), true );
    assert.strictEqual( isIsogram("isogram"), true );
    assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
    assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
    assert.strictEqual( isIsogram("isIsogram"), false );
    assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
  });
});
```
---

#### `Top 3 Solution`
```JavaScript
// Solution 1
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}

// Solution 2
function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}
//z.

// Solution 3
function isIsogram(str)  {
  // Downcase everything, split on letters.
  str_lc = str.toLowerCase();
  var letters = str_lc.split('');
  
  // Utility: checks whether the given "value" at "index" is actually
  // first encountered at this "index" position within a string ("self").
  // Expected to be used with Array#filter.
  var check4uniqueness = function(value, index, self) { 
    return self.indexOf(value) === index;
  }
  
  // An isogram string contains no duplicate, hence must have the same
  // length than the array composed of unique letters from that string.
  return letters.filter(check4uniqueness).length == str.length;
}
```
