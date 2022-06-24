### Powers of 2

![image](https://user-images.githubusercontent.com/99033220/175453453-227f604b-2091-4d20-9dab-def4404a3b55.png)

#### `My Solution`
```JavaScript
function powersOfTwo(n){
  let num = [];
  
  for (let i = 0; i < n+1; i++) {
    num.push(Math.pow(2, i));
  };
  return num;
}
```
