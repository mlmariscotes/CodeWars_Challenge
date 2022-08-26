## Integers: Recreation One
![image](https://user-images.githubusercontent.com/99033220/186810505-106b4e55-ccde-4474-9fa7-9c95de0199b9.png)
---
```JavaScript
const listSquared = (m, n) => {
  const result = [];
  for (let i = m; i <= n; i++) {
    const divisorsOfi = [];
    for (let j = 0; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        divisorsOfi.push(Math.pow(j, 2));
        if (i/j != j)
          divisorsOfi.push(Math.pow(i/j, 2));

      }
    }
    let sumOfDivisorsOfi = 1;
    if (divisorsOfi.length > 1) {
      sumOfDivisorsOfi = divisorsOfi.reduce((a, b) => a + b);
    }
    if (Number.isInteger(Math.sqrt(sumOfDivisorsOfi))) {
      result.push([i, sumOfDivisorsOfi]);
    }
  }
  return result;
}
```
