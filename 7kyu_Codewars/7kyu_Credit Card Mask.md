## Credit Card Mask
![image](https://user-images.githubusercontent.com/99033220/176356700-731d7f58-0e2b-4804-8fcb-0211c15531c1.png)

---
```JavaScript
// My Solution
function maskify(cc) {
  if(cc.length < 4) return cc;
  const str = cc.split("");
  let arr = [];
  
  for(let i = 0; i<str.length-4; i++) {
    arr.push("#");
  }
  return arr.join("")+cc.slice(cc.length-4, cc.length);
};
```
---
```JavaScript
// Solution 1
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
};

// Solution 2
function maskify(cc) {
  return cc.replace(/.(?=....)/g, '#');
};

// Solution 3
function maskify(cc) {
  return cc.replace(/.(?=.{4})/g, "#");
}
```
