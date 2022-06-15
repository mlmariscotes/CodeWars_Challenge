## To square(root) or not to square(root)

![image](https://user-images.githubusercontent.com/99033220/172610114-e1ec79a7-71b3-43f8-a9a1-632ade237e36.png)

---
#### `My Solution`
```JavaScript
// 1st Solution
function squareOrSquareRoot(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    const x = Math.sqrt(array[i]) % 1 === 0;   
    if (x == true) {
      newArr.push(Math.sqrt(array[i]));
    } else {
      newArr.push(Math.pow(array[i], 2));
    }
  }
  return newArr;
}

// 2nd Solution
function squareOrSquareRoot(array) {
  let arr = [];
  
  array.forEach((elem, index) => {
    let num = Math.sqrt(elem) % 1 === 0; // if no remainder True, 
    if (num == true) arr.push(Math.sqrt(elem));
    if (num == false) arr.push(Math.pow(elem, 2))
  })
  
  return arr;
}
```
#### `Test Result`
![image](https://user-images.githubusercontent.com/99033220/172610341-dce81a93-6c16-40e0-a96b-d3fda7ee9d32.png)


