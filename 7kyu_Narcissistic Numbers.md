## Narcissistic Number

A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

![image](https://user-images.githubusercontent.com/99033220/170911402-76aae79d-ee27-4089-ab97-e9542e30618e.png)

Write a function that, given n, returns whether or not n is a Narcissistic Number.

---
#### `My Solution`
```JavaScript
function isNarcissistic(n) {
    let z = []; // Array Numbers
    let y = []; // With exponent
    let sum = 0;
    
    // It could be put in one line but for some reason it create a X number of arrays in relate to the X numbers of split.
    let x = String(n);
    let str = x.split('');

    // Converting Number string to Number.
    str.forEach(n => {
    z.push(Number(n));
    });
   
    // Multiplying by it's exponent in a new array
    for (let i = 0; i < z.length; i++) {
      let exp = Math.pow(z[i], z.length);
      y.push(exp);      
     }

    // Adding/Sum of each Number in the array
    for (let i = 0; i < y.length; i++) {
        sum += y[i];
    }
    
    // Finding if n is a Narcissistic Number
    return (n === sum ? true : false)
    
    // if (sum === n) {
    //     return true;
    // } else {
    //     return false;
    // }
    
    //  console.log(x);
    //  console.log(z);
    //  console.log(y);
    //  console.log(sum);
    
}
```
#### `Test Result`


---
#### `Top 3 Solution`
`Solution 1`
```JavaScript
function isNarcissistic(n) {
  return n === n.toString().split('').reduce((res, num, index, arr) => res += Math.pow(num, arr.length), 0)
}
```
`Solution 2`
```JavaScript
function isNarcissistic(n){
  return n === +n.toString().split('').reduce((s, v, i, arr) => s + Math.pow(v, arr.length),0)
}
```
`Solution 3`
```JavaScript
function isNarcissistic(n) {
  const exp = Math.floor(Math.log10(n) + 1);
  let sum = 0;
  
  for (let i = 0; i < exp; i++) {
    let digit = Math.floor(n / Math.pow(10, i)) % 10;
    sum += Math.pow(digit, exp);
  }
  
  return sum === n;
}
```
