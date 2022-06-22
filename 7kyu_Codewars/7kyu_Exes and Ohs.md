## Exes and Ohs
![image](https://user-images.githubusercontent.com/99033220/174954688-2d075ba7-dcb1-45ad-9785-f16b9d2f1049.png)

#### `My Solution`
```JavaScript
function XO(str) {
  let x = 0;
  let o = 0;
  
  str.toLowerCase().split("").forEach((elem) => {
    if(elem == "x") {
      x++;
    } else if (elem == "o") {
      o++;
    }
  })
  
  return (x == o) ? true : false;
}
```
