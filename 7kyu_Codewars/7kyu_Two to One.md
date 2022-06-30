## Two to One
![image](https://user-images.githubusercontent.com/99033220/176572039-b76c4991-5619-46fc-806b-a81584042fa0.png)

---
```JavaScript
// My Solution
function longest(s1, s2) {
  let obj = new Set(s1.concat(s2));
  return [...obj].sort().join(""); 
};
```
---
```JavaScript
// TOP 3 SOLUTION
// Solution 1
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// Solution 2
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}

// Solution 3
function longest(s1, s2) {
  // your code
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function(element, index, array){
    return element !== array[index - 1];
  });
  return s4.join("");
}
```
