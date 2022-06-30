## Find the unique number
![image](https://user-images.githubusercontent.com/99033220/176574833-c36022a9-4fe6-4cc4-9211-a1b43d80c151.png)
---
```JavaScript
// My Solution
function findUniq(arr) {
  let x = [];
  let diff = arr.map((elem, i) => {
    if (elem !== arr[i+1] && arr[i+1] !== arr[i+2]) x.push(arr[i+1]);
  });

  return (x[0] == undefined) ? 0 : x[0];
};
```
---
```JavaScript
// TOP 3 SOLUTION
// Solution 1
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
};

// Solution 2
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
};

// Solution 3
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
};
```
