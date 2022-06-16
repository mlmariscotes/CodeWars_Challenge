## Coprime Validator

![image](https://user-images.githubusercontent.com/99033220/172775834-21ff0569-b057-4caf-8229-79baae496994.png)

---
#### `My Solution`
```JavaScript
function isCoprime(x, y) {
  const arr1 = [];
  const arr2 = [];
  const factor = [];

  // Factoring fo X
  for (let i = 1; i <= x; i++) {
    let remX = x % i;
    if (remX == 0) {
      arr1.push(i);
    }
  }
  
  // Factoring for Y
  for (let i = 1; i <= y; i++) {
    let remY = y % i;
    if (remY == 0) {
      arr2.push(i);
    } 
  }
  
  // Getting the coprime
  const j = arr1.filter(function (num) {
      return arr2.indexOf(num) !== -1;
   
  })
  
  return (j.length == 1) ? true : false
}
```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
function isCoprime(x, y) {
  const min = Math.min(x, y);
  
  for (let i = 2; i <= min; i++) {
    if (x % i === 0 && y % i === 0) {
      return false;
    }
  }
  return true;
}

// Solutin 2
const isCoprime = (x,y) => [...Array(98)].every((_,i)=>x%(++i+1)|y%++i)

// Solution 3
function isCoprime(x, y) {
  let arrX = Array.from({length:x}, (_,i)=> x % (i+1) === 0 ? i+1 : 0).filter(e => e)
  let arrY = Array.from({length:y}, (_,i)=> y % (i+1) === 0 ? i+1 : 0).filter(e => e)
  let arr = arrX.filter(e => arrY.includes(e))
  return arr.length === 1
}
```


