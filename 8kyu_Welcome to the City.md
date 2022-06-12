## Welcome to the City
![image](https://user-images.githubusercontent.com/99033220/173232437-36e307ed-5ec1-445d-84b4-7c26c96a9667.png)

---
#### `My Solution`
```JavaScript
function sayHello( name, city, state ) {
  const x = name.toString();
  const y = x.replace(/,/g, " ");
   
  return `Hello, ${y}! Welcome to ${city}, ${state}!`
}
```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
function sayHello( name, city, state ) {
return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

// Solution 2
function sayHello( name, city, state ) {
  return 'Hello, ' + name.join(' ') + '! Welcome to ' + city + ', ' + state + '!';
}

// Solution 3
var sayHello = (n, c, s) => `Hello, ${n.join(' ')}! Welcome to ${c}, ${s}!`;
```
