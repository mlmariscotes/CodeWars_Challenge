## Moving Zeros To The End

![image](https://user-images.githubusercontent.com/99033220/173497904-79fdb2f2-c3b9-4b0b-8419-a6d516ab9fad.png)

---
#### `My Solution`
```JavaScript
function moveZeros(arr) {
  let x = []; // Non Zero
  let y = []; // Zero
  
  arr.forEach((elem, index) => {
    if (elem !== 0) {
      x.push(elem);
    } else {
      y.push(elem);
    }
  });
  return x.concat(y);  
}
```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}

// Solution 2
var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num){return num !== 0;});
  var zeroList = arr.filter(function (num){return num === 0;});
  return filtedList.concat(zeroList);
}

// Solution 3
var moveZeros = function (arr) {
  return arr
    .filter((val) => val !== 0)
    .concat(arr.filter((val) => val === 0));
}
```
