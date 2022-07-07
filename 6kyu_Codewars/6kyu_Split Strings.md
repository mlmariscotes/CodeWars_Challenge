## Split Strings
![image](https://user-images.githubusercontent.com/99033220/177675803-54b7ff92-971e-404a-b2a2-6e7116d5bec6.png)

---
```JavaScript
// My Solution
function solution(str){
  let arr = [];

   for(let i = 0; i<str.length; i+=2){
     if(str[i+1]) arr.push(str[i]+str[i+1])
     else arr.push(str[i]+'_');
   };

  return arr;
};
```
