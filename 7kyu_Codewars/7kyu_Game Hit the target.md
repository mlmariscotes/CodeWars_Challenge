## Game Hit the target
![image](https://user-images.githubusercontent.com/99033220/175857123-99acee1a-ef3a-4c60-b158-450454a4c3ec.png)

---
```JavaScript
// My Solution
const solution = mtrx => {
  let arr = mtrx.filter((elem) => elem.includes(">") && elem.includes("x"))[0] || [];
  return arr.indexOf(">") < arr.indexOf("x");     
};
```

---
```JavaScript
// Other Solution
const solution = mtrx => {
let n = mtrx.length
let arrowfound = false
let xfound = false
let nol = 0
 for (let i = 0;i < n - nol; i++){
   for (let j = 0; j < n; j++){
     if (mtrx[i][j] === ">"){
       arrowfound = true
       nol = n - i - 1
     }
     if (mtrx[i][j] === "x"){
       xfound = true
      }
     if (xfound && !arrowfound ){
       return false
     }
    if (xfound && arrowfound ){
      return true
    }   
   }
 
 }
  return false

}
```
