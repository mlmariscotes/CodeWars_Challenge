## You're a square!
![image](https://user-images.githubusercontent.com/99033220/174509813-d1efeb96-a901-4625-a182-e322ae36933c.png)

---
#### `My Solution`
```JavaScript
var isSquare = function(n){
  return (n < 0) ? false : Math.sqrt(n) % 1 == 0;
}
```
---
#### `Test Data`
```JavaScript
describe("isSquare", function(){
  it("should work for some examples", function(){
    Test.assertEquals(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
    Test.assertEquals(isSquare( 0), true, "0 is a square number (0 * 0)");
    Test.assertEquals(isSquare( 3), false, "3 is not a square number");
    Test.assertEquals(isSquare( 4), true, "4 is a square number (2 * 2)");
    Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
    Test.assertEquals(isSquare(26), false, "26 is not a square number");
  });
});
```
#### `Top 3 Solution`
```JavaScript
// Solution 1
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

// Solution 2
const isSquare = n => Number.isInteger(Math.sqrt(n));

// Solution 3
var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
}
```
