## Shortest Word
![image](https://user-images.githubusercontent.com/99033220/176064372-62a0b16b-53ea-44c8-8980-68cce580627e.png)
---
```JavaScript
// My Solution
function findShort(s){
  const word = s.split(" ").reduce((a, b) => {
    return a.length <= b.length ? a : b;
  });
  return word.length;
};
```
---
```JavaScript
// TOP 3 SOLUTION
// Solution 1
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
};

// Solution 2
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
};

// Solution 3
const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;

```
