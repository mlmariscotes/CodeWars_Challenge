## Merge two sorted arrays into one
![image](https://user-images.githubusercontent.com/99033220/175473542-215dbd51-6797-42e4-9f9c-a32b1aac441a.png)

---
#### `My Solution`
```JavaScript
function mergeArrays(arr1, arr2) {
  const arr = (arr1.concat(arr2));
  let x =  arr.sort((a, b) => a-b);
  return [...new Set(x)];
};
```
---
#### `Test Data`
```JavaScript
const assert = require("chai").assert;

describe("Tests", () => {
  it("test", () => {
assert.deepEqual(mergeArrays([1,2,3,4], [5,6,7,8]), [1,2,3,4,5,6,7,8], "Basic tests");
assert.deepEqual(mergeArrays([1,3,5,7,9], [10,8,6,4,2]), [1,2,3,4,5,6,7,8,9,10], "Basic tests");
assert.deepEqual(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]), [1,2,3,4,5,7,9,10,11,12], "Basic tests");
  });
});
```
