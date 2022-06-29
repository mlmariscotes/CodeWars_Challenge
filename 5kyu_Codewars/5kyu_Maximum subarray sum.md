## Maximum subarray sum
![image](https://user-images.githubusercontent.com/99033220/176331653-c1e49d82-4021-41c6-8c02-238a67e2cd9b.png)

---
#### Reference: <a href="https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d">Kadane's Algorithm</a>
```JavaScript
// My Solution
var maxSequence = function(arr){  
  let max1 = 0;
  let max2 = 0;
  
  arr.forEach((elem) => {
    max1 = Math.max(elem, max1+elem);
    max2 = Math.max(max2, max1);
  });
  return (max2 < 0 || arr.length == 0 ) ? 0 : max2; 
};
```
---
```JavaScript
// MY SOLUTION

// Solution 1
var maxSequence = function(arr){
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        currentSum = Math.max(currentSum+number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
};

// Solution 2
var maxSequence = function(arr){
  var max = 0;
  var cur = 0;
  arr.forEach(function(i){
    cur = Math.max(0, cur + i);
    max = Math.max(max, cur);
  });
  return max;
}

// Solution 3
function maxSequence(arr) {
  var max = 0
  
  for (var i = 0; i < arr.length; i++) {
    for (var sum = 0, j = i; j < arr.length; j++) {
      sum += arr[j]
      if (sum > max) max = sum
    }
  }
  
  return max
}
```
