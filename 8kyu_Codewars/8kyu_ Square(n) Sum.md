## Square(n) Sum
![image](https://user-images.githubusercontent.com/99033220/179439773-3fd5646b-4b29-4fbe-9fc0-6b7ae2ef6ff2.png)
---
```Javascript
// My Solution
function squareSum(numbers){
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + Math.pow(numbers[i], 2);
  };
  return sum;
}
```
