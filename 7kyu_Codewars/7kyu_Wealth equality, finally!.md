## Wealth equality, finally!
![image](https://user-images.githubusercontent.com/99033220/175854024-5b82a945-8b24-4481-8f6c-629f7dde5f51.png)

---
```JavaScript
// My Solution
function redistributeWealth(wealth) {
  const value = wealth.reduce((acc, curr) => acc + curr, 0) / wealth.length;
  for (let i = 0; i < wealth.length; i++){
    wealth[i] = value;
  };
};
```
---
```JavaScript
// TOP 4 SOLUTION
// Solution 1
const redistributeWealth=(w,v=w.reduce((a,b)=>a+b,0)/w.length)=>w.fill(v)

// Solution 2
function redistributeWealth(wealth) {
  var sum = 0;
  var average = 0;

  for(var i = 0;i<wealth.length;i++)
  {
    sum += wealth[i];
  }
  average = sum / wealth.length;
  
  for(var i = 0;i<wealth.length;i++)
  {
    wealth[i] = average;
  }
}

// Solution 3
function redistributeWealth(wealth) {
  var total = wealth.reduce(function(a,b) { return a + b });
  
  return wealth.fill(total/wealth.length);
}

// Solution 4
function redistributeWealth(wealth) {
  wealth = wealth.fill((wealth.reduce(function(a, b) {
    return a + b;})) / wealth.length);
}

// first we reduced the wealth array to one value
// that equals the total wealth among all citizens
// and then we divided it by the length of the
// array, which is the number of citizens, to get
// the average amount -- the amount we can equally
// distribute to everyone. Then we fill the wealth
// array with that value.


```
