## Count the divisors of a number
Count the number of divisors of a positive integer n.

Random tests go up to `n = 500000.`

**Examples (input --> output)**

![image](https://user-images.githubusercontent.com/99033220/171793262-9fc87435-f56e-43cb-89a9-843cd0b7bda6.png)

--- 
#### `My Solution`
```JavaScript
function getDivisorsCnt(n){
  let arr = [];
  
  for (let i = 1; i < n+1; i++) {
    let rem = n % i;
    if(rem === 0) {
      arr.push(i)
    } 
  }
  return arr.length;
}
```
#### `Test Result`
![image](https://user-images.githubusercontent.com/99033220/171793401-bde44439-994c-4d1a-82cb-1f739612e9e5.png)
