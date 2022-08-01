## Counting sheep...
![image](https://user-images.githubusercontent.com/99033220/182063145-c2a7f9e7-63a1-489c-928d-a0ad143b01c7.png)
---
```JavaScript
function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.map((a) => {
    if (a == true) {
      count++;
    }
  });
  return count;
}
```
