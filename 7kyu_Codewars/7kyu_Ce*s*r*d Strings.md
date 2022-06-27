## Ce*s*r*d Strings
![image](https://user-images.githubusercontent.com/99033220/175843207-63f06d0e-ffe6-4184-acc4-a59deb888361.png)

---
```JavaScript
// My Solution

function uncensor(infected, discovered) {
  let str = [];
  let count = 0;
  
  for(let i = 0; i < infected.length ; i++) {
    if(infected[i] !== "*") {
      str.push(infected[i]);
    } else {
      str.push(discovered[count]);
      count++;
    };
  };
  return str.join("");
};
```
---

```JavaScript
// Top 3 Solution

// Solution 1
function uncensor(infected, discovered) {
  const arr = [...discovered]
  return [...infected].map(el=> el === '*' ? arr.shift() : el).join('')
}

// Solution 2
uncensor=(p,q,w=[...q])=>p.replace(/\*/g,_=>w.shift())

// Solution 3
function uncensor(infected, discovered, it=0) {
  return infected.replace(/\*/g, e=>discovered[it++])
}


```
