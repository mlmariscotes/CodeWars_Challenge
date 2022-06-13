## Square Every Digit
![image](https://user-images.githubusercontent.com/99033220/173274463-fb2a6f9b-0549-46a4-8bd2-b0b111e3591a.png)

---
#### `My Solution`
```JavaScript
function squareDigits(num){
    const z = [];
    const x = Array.from(String(num), Number)
    
    for (let i = 0; i < x.length; i++) {
        let y = Math.pow(x[i], 2)
        z.push(y)
    }
     
    return Number(z.join(""))
    
}
```
