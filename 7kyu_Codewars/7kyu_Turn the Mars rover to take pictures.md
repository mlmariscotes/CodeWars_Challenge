## Turn the Mars rover to take pictures

![image](https://user-images.githubusercontent.com/99033220/175451725-4fe64e64-6fee-4ee2-ae90-ca8b2fc437c9.png)

---
#### `My Solution`
```JavaScript
function turn(current, target) {
  let turnR = current+target;
  if (turnR == "NE") return "right";
  if (turnR == "ES") return "right";
  if (turnR == "SW") return "right";
  if (turnR == "WN") return "right";
  else return "left"    
};
```
---
#### `Test Data`
```JavaScript
const assert = require('chai').assert;

describe('turn', () => {
  describe('facing N', () => {
    it('should turn right to face E', () => {
      const actual = turn('N', 'E');
      const expected = 'right';
      
      assert.equal(actual, expected);
    });
  });

  describe('facing S', () => {
    it('should turn right to face W', () => {
      const actual = turn('S', 'W');
      const expected = 'right';
      
      assert.equal(actual, expected);
    });
  });
});
```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
const directions = {
  N: {W: "left", E: "right"},
  S: {W: "right", E: "left"},
  W: {N: "right", S: "left"},
  E: {N: "left", S: "right"},
}

function turn(current, target) {
  return directions[current][target]
}

// Solution 2
function turn(c, t) {
  if(c === 'N'){
    if(t === 'E') return 'right'
    if(t === 'W') return 'left'
  }else if (c === 'S'){
    if(t === 'W') return 'right'
    if(t === 'E') return 'left'
  }else if(c === 'E'){
    if(t === 'S') return 'right'
    if(t === 'N') return 'left'
  }else{
    if(t === 'N') return 'right'
    if(t === 'S') return 'left'
  }
}

// Solution 3
function turn(current, target) {
  return "NESWN".includes(current+target) ? 'right' : 'left';
}
```
