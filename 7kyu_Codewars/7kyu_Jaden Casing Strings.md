## Jaden Casing Strings

![image](https://user-images.githubusercontent.com/99033220/175243952-778b01bf-2ca2-47ac-a343-b6faa86985cc.png)
---
#### `My Solution`
```JavaScript
String.prototype.toJadenCase = function () {
  return this.split(" ").map((elem) => {
   return elem.replace(elem.charAt(0), elem.charAt(0).toUpperCase());
  }).join(" ");
};
```
