## How many stairs will Suzuki climb in 20 years?
![image](https://user-images.githubusercontent.com/99033220/173186239-d605040e-d520-402d-8621-51fe117d4c5e.png)

---
#### `My Solution`
```JavaScript
function stairsIn20(s){
  return s.flat(2).reduce((a,b) => a+b , 0) * 20;
}
```
