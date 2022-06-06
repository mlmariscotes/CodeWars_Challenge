## Double Char

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

![image](https://user-images.githubusercontent.com/99033220/172078601-d25f8300-f055-4a18-9494-f7a692087894.png)

---
#### `My Solution`
```JavaScript
function doubleChar(str) {
    let z = '';
    for (let i = 0; i < str.length ; i++) {
       z = z+str[i]+str[i];
    }
    return z; 
}
```
#### `Test Result`
![image](https://user-images.githubusercontent.com/99033220/172078664-6dd91858-f2ea-41ae-be21-9bf9ee616a20.png)

