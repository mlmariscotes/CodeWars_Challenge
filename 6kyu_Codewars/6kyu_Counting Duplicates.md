## Counting Duplicates
![image](https://user-images.githubusercontent.com/99033220/174251032-5af119d0-3feb-42fa-87b7-03c3f5fe7ada.png)

---
#### `My Solution`
```JavaScript
function duplicateCount(text){
    let dup = [];
    const arr = text.toLowerCase().split("").sort();

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == arr[i+1]) {
            dup.push(arr[i])
        }
    }
    
    const dup2 = new Set(dup);
    return dup2.size;
}
```
---
#### `Test Data`
```JavaScript
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(duplicateCount(""), 0);
Test.assertEquals(duplicateCount("abcde"), 0);
Test.assertEquals(duplicateCount("aabbcde"), 2);
Test.assertEquals(duplicateCount("aabBcde"), 2,"should ignore case");
Test.assertEquals(duplicateCount("Indivisibility"), 1)
Test.assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")

  });
});

```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

// Solution 2
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}

// Solution 3
function duplicateCount(text){
  var lower = text.toLowerCase();
  var count = 0;
  var used = [];
  
  lower.split('').forEach(function(letter) {
    if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
      count++;
      used.push(letter);
    }
  });
  
  return count;
}
```


