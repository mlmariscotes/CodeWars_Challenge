## Sum of two lowest positive integers

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like `[19, 5, 42, 2, 77]`, the output should be 7.

`[10, 343445353, 3453445, 3453545353453]` should return 3453455.

---
#### `My Solution`
```JavaScript
function sumTwoSmallestNumbers(numbers) {
  
  let sort = numbers.sort(function(a,b) {
    return a-b; // sorting number in decending order
  })
  
  return sort[0] + sort[1];
  
}  
```
#### `Test Result`

![image](https://user-images.githubusercontent.com/99033220/171790023-5a1ab398-3054-43a0-8c82-c4f1f762dfaf.png)

---
#### `Top 3 Solution`
`Top 1 Solution`
```JavaScript
function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};
```
`Top 2 Solution`
```JavaScript
function sumTwoSmallestNumbers(numbers) {  
  var [ a, b ] = numbers.sort((a, b) => a - b)
  return a + b
}
```

`Top 3 Solution`
```JavaScript
function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b) => a - b);
  return numbers[0] + numbers[1];
};
```


