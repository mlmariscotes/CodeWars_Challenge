## Mumbling

![image](https://user-images.githubusercontent.com/99033220/173295074-1a6ee472-095f-4708-917f-7b2954cafb44.png)

---
#### `My Solution`
```JavaScript
function accum(s) {
    let arr = [];
    const ss = s.toLowerCase();

    for (let i = 0; i < ss.length; i++) {
        let str = ss[i].toUpperCase();
        for (let j = 0; j < i; j++) {
            str += ss[i];
        }
        arr.push(str)
    } 
    
    return arr.join("-")
}
```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

// Solution 2
function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}

// Solution 3
function accum(str) {
  var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}

```
