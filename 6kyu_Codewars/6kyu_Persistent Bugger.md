## Persistent Bugger.
![image](https://user-images.githubusercontent.com/99033220/174696833-b32a142c-8869-4692-b088-54c62c5120a0.png)
---
#### `My Solution`
```JavaScript
function persistence(num) {
  let count = 0;
  
  while (num.toString().split("").length !== 1) {
    num = num.toString().split("").reduce((acc, curr) => acc * curr);
    count++;
  }
 return count; 
}
```
---
#### `Test Data`
```JavaScript
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Persistent Bugger.", () => {
  it("Fixed tests", () => {
    assert.strictEqual(persistence(39),3);
    assert.strictEqual(persistence(4),0);
    assert.strictEqual(persistence(25),2);
    assert.strictEqual(persistence(999),4);
  });
});
```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}

// Solution 2
function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}

// Solution 3
function persistence(num) {
   for (var i = 0; num > 9; i++) {
     num = num.toString().split('').reduce((t, c) => c * t);
   }
   return i;
}
```
