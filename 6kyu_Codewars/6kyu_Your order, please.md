## Your order, please
![image](https://user-images.githubusercontent.com/99033220/174978013-347be573-982c-4efb-81f7-7c211623bdd9.png)
---
#### `My Solution`
```JavaScript
function order(words){
  let arr = [];
  let word = words.split(" ").sort();
  
  for ( let i = 0; i < 99; i++ ) {
    word.forEach((elem) => {
     if (elem.split("").includes(i.toString()) == true) {
       arr.push(elem)
     }; 
    })
  }
  return arr.join(" ");
}
```
---
#### `Test Data`
```JavaScript
const {assert} = require('chai');

describe("order", () => {
  it("should work corectly", () => {
    assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
    assert.strictEqual(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
    assert.strictEqual(order(""), "", "empty input should return empty string" )
  });
});
```

#### `Top 3 Solution`
```JavaScript
// Solution 1
function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
} 

// Solution 2
function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
} 

// Solution 3
function order(words){
  var array = words.split(' ');
  var sortedArray = [];
  for(i = 0; i <= array.length; i++) {
    for(j = 0; j < array.length; j++) {
      if(array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
}
```
