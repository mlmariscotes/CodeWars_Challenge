## Detect Pangram
![image](https://user-images.githubusercontent.com/99033220/178186010-849dcfec-433a-48a0-9550-6556b043e6b5.png)
---
```JavaScript
// My Solution
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz"
    .split("").every(function(x){
      return string.indexOf(x) !== -1;
  });
}
```
---
```JavaScript
// TOP 3 SOLUTION
// Solution 1
function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}

// Solution 2
function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}

// Solution 3
function isPangram(string) {
  const alphabetList = [...'abcdefghijklmnopqrstuvwxyz'];

  return alphabetList.every((letter) => string.toLowerCase().includes(letter));
}
```
