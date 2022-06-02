## Simple Interest and Compound Interest

**Simple interest** on a loan is calculated by simply taking the initial amount (the principal, p) and multiplying it by a rate of interest (r) and the number of time periods (n).

**Compound interest** is calculated by adding the interest after each time period to the amount owed, then calculating the next interest payment based on the principal PLUS the interest from all previous periods.

Given a principal p, interest rate r, and a number of periods n, return an array `[ total owed under simple interest, total owed under compound interest ]`.

**Notes:**
- Round all answers to the nearest integer
- Principal will always be an integer between 0 and 9999
- interest rate will be a decimal between 0 and 1
- number of time periods will be an integer between 0 and 50

**Examples**

![image](https://user-images.githubusercontent.com/99033220/171547415-a5e5f376-7321-4b56-9188-a85088822152.png)

---
#### `My Solution`

```JavaScript
function interest(P,r,n) {
//  let totalInt = [];

//  return [Math.round(P * r * n + P), Math.round(P * Math.pow(1+r,n))];
    return [P * r * n + P, P * Math.pow(1+r,n)].map(Math.round);
  
  
//   // Simple interest  
//   let simple = Math.round(P * r * n + P); // Change to array
//   totalInt.push(simple);

//   // Compound
//   let compound = Math.round(P * Math.pow(1+r,n));
//   totalInt.push(compound);

//   return totalInt;
}
```
#### `Test Result`
![image](https://user-images.githubusercontent.com/99033220/171547949-6c5ec3e4-dced-43cc-9e75-c7f5f671da50.png)

---
#### `Top 3 Solution`

`Solution 1`
```JavaScript
function interest($, r, n) {
  const dif = (x, y, z) => z > 0 ? dif(x + x*y, y, z-1) : Math.round(x);
  return [Math.round($ + $*r*n), dif($, r, n)]
}
```

`Solution 2`
```JavaScript
function interest(P,r,n) {
  return [P*(1 + r*n), P*Math.pow(1+r, n)].map(Math.round)
}
```
`Solution 3`
```JavaScript
let interest = (P, r, n) => [P * (1 + r * n), P * Math.pow(1 + r, n)].map(Math.round);
```

