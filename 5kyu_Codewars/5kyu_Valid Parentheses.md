## Valid Parentheses

![image](https://user-images.githubusercontent.com/99033220/173502644-cfcdbc8a-6c83-4f51-94de-1305b6ad0365.png)

---
#### `My Solution`
```JavaScript
function validParentheses(n) {
    const x = n.split("")
    let w = [];
    let z = [];
    
    x.filter((elem) => {
        if(elem == "(" ) {
            w.push(elem)
        }else {
            z.push(elem);
        }
    })
      return (w.length == z.length) ? true : false;
}
```
---

#### `Top 3 Solution`
```JavaScript
// Solution 1
function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}

// Solution 2
function validParentheses(parens){
  var indent = 0;
  
  for (var i = 0 ; i < parens.length && indent >= 0; i++) {
    indent += (parens[i] == '(') ? 1 : -1;    
  }
  
  return (indent == 0);
}

// Solution 3
function validParentheses(parens){
  var re = /\(\)/;
  while (re.test(parens)) parens = parens.replace(re, "");
  return !parens;
}

```

