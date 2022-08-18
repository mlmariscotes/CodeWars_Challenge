## Highest Scoring Word
![image](https://user-images.githubusercontent.com/99033220/185287705-47a809f3-41e1-4fa6-b34f-925dee416170.png)
---
```JavaScript
function high(s){
  let as = s.split(' ').map(s => [...s].reduce((a, b) => a+b.charCodeAt(0) - 96, 0)
  );
  return s.split(' ')[as.indexOf(Math.max(...as))];
}
```
