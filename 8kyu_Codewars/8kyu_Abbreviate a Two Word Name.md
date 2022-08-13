## Abbreviate a Two Word Name
![image](https://user-images.githubusercontent.com/99033220/184462097-a207ed3d-c924-421c-8136-7e9d075e553c.png)
---
```JavaScript
function abbrevName(name){
    const y = name.toUpperCase().split(" ");;
    return `${y[0].charAt(0)}.${y[1].charAt(0)}`;
}
```
