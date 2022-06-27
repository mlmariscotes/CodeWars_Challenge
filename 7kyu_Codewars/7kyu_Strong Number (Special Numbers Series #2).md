## Strong Number (Special Numbers Series #2)
![image](https://user-images.githubusercontent.com/99033220/175847027-fa3372d1-a459-4b62-a48d-80591fdd7575.png)
![image](https://user-images.githubusercontent.com/99033220/175847064-7706e91c-660d-497f-9eea-da5af1cbe44a.png)

---
```JavaScript
// My Solution

function strong(n) {
  const arr = n.toString().split("").map(Number);
  
  // Factorial Function
  function factorial(num) {
    if(num == 0 || num == 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    };
  };

  const arr1 = arr.map((elem) => {
    return factorial(elem)
  });
  
  const value = arr1.reduce((acc, curr) => {
    return acc+curr;
  });
  
  return (value === n) ? "STRONG!!!!" : "Not Strong !!";
 
};
```
---
```JavaScript
// TOP 3 SOLUTION

// Solution 1
function strong(n) {
  let arr = String(n).split("");
  
  let sum = 0;
  
  function factorial(fnNum){
    if(fnNum <= 1){
      return 1;
    }else{
      return fnNum * factorial(fnNum - 1);
    }
  }
  
  for(let i = 0; i < arr.length; i++){
    sum += factorial(arr[i]);
  }
  
  return n == sum ? "STRONG!!!!" : "Not Strong !!"; 
}

// Solution 2
function strong(n) {
  return [1,2,145,40585].includes(n)?'STRONG!!!!':'Not Strong !!';
}

// Solution 3
// fun task really fun, thanrs 
function strong(n, num = [...`${n}`]) {
  const fuc = x => Array(x).fill(0).reduce((a, _, i) => a * (i + 1), 1)
  return num.map(el => fuc(+el)).reduce((a,b)=> a+b,0) === n ? "STRONG!!!!" : "Not Strong !!" ;
}
```
