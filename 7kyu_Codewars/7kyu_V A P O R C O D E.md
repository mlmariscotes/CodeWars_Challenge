## V A P O R C O D E
![image](https://user-images.githubusercontent.com/99033220/177885343-ea6d7153-2154-43d8-b22e-2e00d7a3746c.png)

---
```JavaScript
// My Solution
function vaporcode(string) {
  return string.replace(/\s+/g,"").toUpperCase().split("").join("  ");
};
```
