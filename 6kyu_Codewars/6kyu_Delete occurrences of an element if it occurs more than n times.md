## Delete occurrences of an element if it occurs more than n times
![image](https://user-images.githubusercontent.com/99033220/186309980-b47c9da6-849d-42b3-960c-fa85f2ae70f5.png)
---
```JavaScript
function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}
```
