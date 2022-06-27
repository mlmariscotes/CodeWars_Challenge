## Convert string to camel case
![image](https://user-images.githubusercontent.com/99033220/175877599-0bbf4cfd-8bdf-43c3-a8cc-236d72a6efed.png)

---
```JavaScript
// My Solution
function toCamelCase(str){
  return str.replace(/[-_]\w/g, function(w){
    return w.charAt(1).toUpperCase();
  });
};

```
---

```JavaScript
// TOP 3 SOLUTION
// Solution 1
function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}

// Solution 2
function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

// Solution 3
function toCamelCase(str){
  return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
}
```
