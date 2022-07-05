## Sort the odd
![image](https://user-images.githubusercontent.com/99033220/177239838-165d6ff8-00b1-41f8-96bf-70766feff10e.png)

---
```JavaScript
// My Solution
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
};
```
