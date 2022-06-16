## Simple Fun #79: Delete a Digit

**Task**
Given an integer `n`, find the maximal number you can obtain by deleting exactly one digit of the given number.

**Example**
For `n = 152`, the output should be `52`;

For `n = 1001`, the output should be `101`.

**Input/Output**
`[input]` integer `n`

Constraints: `10 ≤ n ≤ 1000000.`

`[output]` an integer

---
#### `My Solution`
```JavaScript
function deleteDigit(n) {
    const str = n.toString().split(""); // Converting number to string array.
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        let num = (str.slice(0, i) + str.slice(i+1)).split(",").join("")*1; // *1 to change the output from string to number
        if (num > max){
          max = num; 
        }
    }
    return max;
}
```
#### `Test Result`
![image](https://user-images.githubusercontent.com/99033220/172304647-b44b27b8-4617-462b-af3f-9876a6c0ac61.png)

---

#### `Top 3 Solution`
```JavaScript

// Solution 1
function deleteDigit(n) {
  const s = String(n)
  return Math.max(...Array.from(s, (_, i) => s.slice(0, i) + s.slice(i + 1)))
}

// Solution 2
function deleteDigit(n) {
  return Number(n.toString().replace(/0|1(?![01])|2(?![012])|3(?![0123])|4(?![01234])|5(?![012345])|6(?![0123456])|7(?![01234567])|8(?![012345678])|9(?![0123456789])/,''));
}

// Solution 3
const deleteDigit = n => {
  let max = 0,
      str = n.toString();
  for (let i = 0; i < str.length; i++) {
    let temp = +(str.slice(0,i) + str.slice(i+1));
    max = Math.max(max, temp);
  }
  return max;
}

```

