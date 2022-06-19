## Get the Middle Character
![image](https://user-images.githubusercontent.com/99033220/174464486-13155c58-0356-4428-90ac-f18e0752dd03.png)

---
#### `My Solution`
```JavaScript
function getMiddle(s) {
  const arr = s.split("");
  const word = arr.length;

  if (word % 2 == 0) {
    return (arr.slice(word/2 - 1, word/2 + 1)).join("");
  } else {
    return arr[Math.trunc(word/2)];
  } 
}
```
---
#### `Test Data`
```JavaScript
describe("GetMiddle", function() {
  it("Tests", function() {
    Test.assertEquals(getMiddle("test"),"es");
    Test.assertEquals(getMiddle("testing"),"t");
    Test.assertEquals(getMiddle("middle"),"dd");
    Test.assertEquals(getMiddle("A"),"A");
  });
});
```
---
