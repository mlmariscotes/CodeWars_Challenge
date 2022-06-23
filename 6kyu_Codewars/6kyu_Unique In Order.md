## Unique In Order
![image](https://user-images.githubusercontent.com/99033220/175196110-ff35758b-83f9-4f7d-9890-89d34c541fd6.png)

---
#### `My Solution`
```JavaScript
var uniqueInOrder=function(iterable){
  let order = [];
  let arr = iterable;
    
  for (let i = 0; i < arr.length; i++){
    let dup = [];
    if(arr[i] !== arr[i+1]) {
      order.push(arr[i])
    } 
  };
  return order;
};
```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
function uniqueInOrder(it) {
  var result = []
  var last
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  
  return result
}

// Solution 2
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

// Solution 3
var uniqueInOrder=function(iterable){
  var res = [];
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] != iterable[i+1]) res.push(iterable[i]);
  }
  return res;
}
```
