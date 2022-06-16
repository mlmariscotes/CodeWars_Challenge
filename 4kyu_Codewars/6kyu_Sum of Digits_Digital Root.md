## Sum of Digits / Digital Root
![image](https://user-images.githubusercontent.com/99033220/173479930-888c7a68-be9d-41c5-9efd-4bdc8b74a4c4.png)

---
#### `My Solution`
```JavaScript
function digital_root(n) {
  if (n < 10){
    return n;
  } else {
    return digital_root(n.toString().split("").map((elem) => Number(elem)).reduce((acc, cur) => acc + cur));
  }
}
```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
function digital_root(n) {
  return (n - 1) % 9 + 1;
}

// Solution 2
function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}

// Solution 3
function digital_root(n) {
  if (n < 10)
    return n;

  for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
    sum += Number(n[i]);
   
  return digital_root(sum);
}
```
