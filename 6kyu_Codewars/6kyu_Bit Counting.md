## Bit Counting
![image](https://user-images.githubusercontent.com/99033220/174199839-aa0c5323-35aa-493d-a678-535f974519fd.png)

---
#### `My Solution`
```JavaScript
var countBits = function(n) {
   const arr = n.toString(2).split("")
   return arr.reduce((acc, curr) => acc + Number(curr), 0)
};
```
---
#### `Test Data`
```JavaScript
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(countBits(0), 0);
    assert.strictEqual(countBits(4), 1);
    assert.strictEqual(countBits(7), 3);
    assert.strictEqual(countBits(9), 2);
    assert.strictEqual(countBits(10), 2);
    })
  })
```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
countBits = n => n.toString(2).split('0').join('').length;

// Solution 2
var countBits = function(n) {
  return n.toString(2).replace(/0/g,'').length;
};

// Solution 3
function countBits(n) {
  for(c=0;n;n>>=1)c+=n&1
  return c;
}
```

