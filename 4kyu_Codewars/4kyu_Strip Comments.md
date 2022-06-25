## Strip Comments
![image](https://user-images.githubusercontent.com/99033220/174203309-fbc6e88a-8bff-49ad-8558-0b08f1800110.png)

---
#### `My Solution`
```JavaScript
function solution(input, markers){
  var comments = input.split('\n');
  for (var i in markers) {
    for (var j in comments) {
      var line = null;
      var idx = comments[j].indexOf(markers[i]);
      if (idx >= 0) {
        comments[j] = comments[j].substring(0, idx).trim();
      } 
    }
  }
  return comments.join('\n');
}
```
---
#### `Test Data`
```JavaScript
describe("Tests", () => {
  it("test", () => {
function checkComments(input, markers, expected) {
  var actual;
  actual = solution(input, markers);
  return Test.expect(actual === expected, "Returned '" + actual + "' but expected '" + expected + "'");
};

checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges")
checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")
});
});
```
---

#### `Top 3 Solution`
```JavaScript
// Solution 1
function solution(input, markers) {
  return input.split('\n').map(
    line => markers.reduce(
      (line, marker) => line.split(marker)[0].trim(), line
    )
  ).join('\n')
}

// Solution 2
function solution(input, markers){
  return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
}

// Solution 3
function solution(input, markers){
  return input.replace(new RegExp(`\\s*[${markers.join('|')}].+`,'g'),'');
}
```
