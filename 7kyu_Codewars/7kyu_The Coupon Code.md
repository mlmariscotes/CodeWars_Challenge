## The Coupon Code
![image](https://user-images.githubusercontent.com/99033220/175852083-aaeba7bc-a50f-4632-8d56-07202b5144d9.png)

---
```JavaScript
// My Solution
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return (correctCode === enteredCode && Date.parse(currentDate) <= Date.parse(expirationDate) ) ? true : false;
}
```
---

```JavaScript
// TOP 3 SOLUTION

// Solution 1
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}

// Solution 2
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
}
// Solution 3
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode &&
         Date.parse(currentDate) <= Date.parse(expirationDate);
}
```
