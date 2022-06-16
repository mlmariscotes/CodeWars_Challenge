## RGB To Hex Conversion

![image](https://user-images.githubusercontent.com/99033220/173733480-38ed2ea5-0afb-4157-ac0c-65198a56cbb1.png)

---
#### `My Solution`
```JavaScript
// Solution 1
function rgb(r, g, b){
  
  // Converting to hex
  function hex(e) {
    let x = e.toString(16).toUpperCase();
    return x.length === 1 ? "0" + x : x    
  }
  
  return `${hex(r)}${hex(g)}${hex(b)}`
  
}
/*
It works but when the input is negative number or higher thant 255 it gives an error
*/

// Solution 2
function rgb(r, g, b){
  
  // Converting to hex
  function hex(e) {
    if (e < 0) return "00";
    if (e > 255) return "FF"; 
    return (e > 15 ? e.toString(16) : '0' + e.toString(16)).toUpperCase();
  }
  
  return `${hex(r)}${hex(g)}${hex(b)}`
}
```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

// Solution 2
function rgb(r, g, b){
  return [r,g,b].map(function(x) {
    return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
  }).join('').toUpperCase();
}

// Solution 3
function rgb(r, g, b){
  function toHex(a) { 
    if (a <= 0) return '00';
    else if (a >= 255) return 'FF';
    else return a.toString(16).toUpperCase();
  }
  return toHex(r) + toHex(g) + toHex(b);
}
```

