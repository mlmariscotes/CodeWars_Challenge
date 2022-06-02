## Build Tower

Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

![image](https://user-images.githubusercontent.com/99033220/171567986-7ac061be-775b-4745-a53b-116d957a42dc.png)

And a tower with 6 floors looks like this:

![image](https://user-images.githubusercontent.com/99033220/171568025-32f4e9b3-e4f1-4d61-befa-c4e525b657bd.png)

---
#### `My Solution`
```JavaScript
function towerBuilder(nFloors) {
  let floor = [];
  
  for (let i = 0; i < nFloors; i++) {
    let stars = " ".repeat(nFloors - i - 1) + "*".repeat((i*2)+1) + " ".repeat(nFloors - i - 1);
    floor.push(stars);
  }
  return floor;
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));
```
#### `Test Result`
![image](https://user-images.githubusercontent.com/99033220/171568206-b5ce4abb-1ccd-4824-bdaf-5bdf7d80a869.png)

#### `Top 3 Solution`
`Solution 1`
```JavaScript
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}
```
`Solution 2`
```JavaScript
function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}
```

`Solution 3`
```JavaScript
function towerBuilder(n) {
  return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
}
```

