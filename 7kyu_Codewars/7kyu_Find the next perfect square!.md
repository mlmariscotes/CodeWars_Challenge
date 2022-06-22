## Find the next perfect square!
![image](https://user-images.githubusercontent.com/99033220/174938978-a5007c80-9e6d-4fe6-a3bf-d0e87b73a720.png)
---
#### `My Solution`
```JavaScript
function findNextSquare(sq) {
  if (Math.sqrt(sq) % 1 !== 0) return -1;
  return sq + 2 * Math.pow(sq, 0.5) +1;
}

```
