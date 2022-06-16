## Directions Reduction

![image](https://user-images.githubusercontent.com/99033220/173727925-d55965fc-7907-4462-894e-0a019cc52241.png)
![image](https://user-images.githubusercontent.com/99033220/173727990-2044ad54-fa4d-4944-9493-9101f3788cd4.png)
![image](https://user-images.githubusercontent.com/99033220/173728010-759dbd24-5483-4025-ba1e-cd5abf0c6cdf.png)

---
#### `My Solution`
```JavaScript
function dirReduc(arr){
  let x = arr.join("")
  const pat = /NORTHSOUTH|SOUTHNORTH|EASTWEST|WESTEAST/gi;
  const pat2 = /NORTH|SOUTH|EAST|WEST/g;
  
  while(pat.test(x)) {
    x = x.replace(pat, "")
  }
  return x.match(pat2) || []
}
```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}

// Solution 2
function dirReduc(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern,'');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}

// Solution 3
function dirReduc(arr){
  var opposite = { "SOUTH":"NORTH", "NORTH":"SOUTH", "WEST":"EAST", "EAST":"WEST"}
  return arr.reduce(function (a, b, i) {
    opposite[a.slice(-1)] === b ? a.pop() : a.push(b)
    return a
  }, [])
}
```
