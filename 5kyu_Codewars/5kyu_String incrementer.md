## String incrementer
![image](https://user-images.githubusercontent.com/99033220/185032273-62420310-8dd1-4488-97d0-2903839dfd3d.png)
---
```JavaScript
function incrementString(str) {
  const body = str.slice(0, -1);
  const lastDigit = str.slice(-1).match(/[0-9]/);
  return lastDigit === null
    ? str + "1"
    : lastDigit != 9
    ? body + (+lastDigit + 1)
    : incrementString(body) + "0";
}
```
