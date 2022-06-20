## Sum of positive
![image](https://user-images.githubusercontent.com/99033220/174527887-cf2bde30-5a70-4e4f-a831-da3a180ee3cb.png)

---
#### `My Solution`
```JavaScript
function positiveSum(arr) {
  let num = 0;
  let array = arr.map((elem) => {
    if(elem > 0) {
      num += elem;
    }
  });
  return num;
}
```
---
#### `Test Data`
```JavaScript
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(positiveSum([1,2,3,4,5]),15);
    assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
    assert.strictEqual(positiveSum([]),0);
    assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
    assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
    });
  });
```

---
#### `Top 3 Solution`
```JavaScript
// Solution 1
function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}

// Solution 2
function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

// Solution 3
function positiveSum (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}
```
