## How good are you really?
![image](https://user-images.githubusercontent.com/99033220/180340573-0da1a3b0-2be7-4508-80ed-24ce38cf7ce5.png)
---
```JavaScript
// My Solution
function betterThanAverage(classPoints, yourPoints) {
  const avg = classPoints.reduce((a,b) => a+b,0) / classPoints.length;
  return (avg < yourPoints) ? true : false;
};
```
