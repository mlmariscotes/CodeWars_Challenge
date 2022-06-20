## List Filtering
![image](https://user-images.githubusercontent.com/99033220/174528885-d0db0f28-2de1-4a6c-9ba7-332f844186c0.png)

---
#### `My Solution`
```JavaScript
function filter_list(l) {
  let arr = [];
  
  l.map((elem)=> {
    let type = typeof elem;
    if(type == "number") {
      arr.push(elem)
    }   
  });
  
  return arr;  
}
```
---
#### `Test Data`
```JavaScript
const assert = require('chai').assert;
describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
    assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
    assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');
  });
});
```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}

// Solution 2
function filter_list(l) {
 return l.filter(v => typeof v == "number")
}

// Solution 3
function filter_list(l) {
  return l.filter(e => Number.isInteger(e));
}
```
