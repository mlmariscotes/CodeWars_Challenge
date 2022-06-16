### Does my number look big in this?

A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:
![image](https://user-images.githubusercontent.com/99033220/171556825-299124e3-1bd1-48f3-bc07-c408ecff88f6.png)

and 1652 (4 digits), which isn't:
![image](https://user-images.githubusercontent.com/99033220/171556853-d3fe4b7e-8f3b-4cea-a37a-4be7dd519210.png)

The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

---
#### `My Solution`
```JavaScript
function narcissistic(value) {
  let arr = [];
   let sum = 0;
  const x = value.toString().split('').map(Number);
  
  for (let i = 0; i < x.length; i++) {
    let power = Math.pow(x[i], x.length)
    arr.push(power)
  }
  
  for (let i = 0; i < arr.length; i++) { 
    sum += arr[i];
  }
  
  let narc = (sum === value) ? true : false;
  
  return narc;
  
}

```
#### `Test Result`
![image](https://user-images.githubusercontent.com/99033220/171557054-c847df35-d805-4828-8dd0-62975d1628be.png)



