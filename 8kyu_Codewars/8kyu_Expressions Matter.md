## Expressions Matter
![image](https://user-images.githubusercontent.com/99033220/175468966-24e5f4c9-2c74-454c-827d-c3b8b8b54e56.png)
![image](https://user-images.githubusercontent.com/99033220/175468985-ba78030e-9e19-4864-aad7-4572872c9c1c.png)

---
#### `My Solution`
```JavaScript
function expressionMatter(a, b, c) {
  const one = a * (b + c);
  const two = a * b * c;
  const three = a + b * c;
  const four = (a + b) * c;
  const five = a + b + c;
  let num = [one, two, three, four, five];
  return Math.max(...num)
}
```
