## Take a Ten Minutes Walk
![image](https://user-images.githubusercontent.com/99033220/174535735-c10c4055-2f6c-4e70-bcde-bde5293d64b3.png)

---
#### `My Solution`
```JavaScript
function isValidWalk(walk) {
    if (walk.length !== 10) return false;
    let dist = {
        n:0,
        s:0,
        e:0,
        w:0,
    }
    
    walk.forEach((elem, index) => {
      dist[walk[index]]++; 
    });
    
    if (dist["n"] == dist["s"] && dist["e"] == dist["w"]) {
        return true;
    } else {
        return false;
    }
}
```
---
#### `Test Result`
```JavaScript
describe("Tests", () => {
  it("test", () => {
//some test cases for you...
Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
Test.expect(!isValidWalk(['w']), 'should return false');
Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

  });
});
```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
function isValidWalk(walk) {
  var dx = 0
  var dy = 0
  var dt = walk.length
  
  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }
  
  return dt === 10 && dx === 0 && dy === 0
}

// Solution 2
function isValidWalk(walk) {
  function count(val) {
    return walk.filter(function(a){return a==val;}).length;
  }
  return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}

// Solution 3
function isValidWalk(walk) {
  const north = walk.filter(item => { return item === "n" }).length;
  const south = walk.filter(item => { return item === "s" }).length;
  const east = walk.filter(item => { return item === "e" }).length;
  const west = walk.filter(item => { return item === "w" }).length;
  
  return walk.length === 10 && north === south && east === west;
}
```
