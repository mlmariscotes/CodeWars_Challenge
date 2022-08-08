## Century From Year
![image](https://user-images.githubusercontent.com/99033220/183335677-0de93c4e-4f0d-4093-99a1-bc659ae60054.png)
---

```JavaScript
function century(year) {
  return (year % 100 == 0) ? year / 100 : Math.trunc(year / 100) + 1;
}
```
