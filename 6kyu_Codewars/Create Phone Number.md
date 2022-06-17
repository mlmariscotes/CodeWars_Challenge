## Create Phone Number

![image](https://user-images.githubusercontent.com/99033220/174201915-4917dd19-7008-4cdf-82de-64728a73071a.png)

---
#### `My Solution`
```JavaScript
function createPhoneNumber(numbers){
    function phone(e) {
        return e.splice(0, 3).join("").toString("");
    }
    
    return `(${phone(numbers)}) ${phone(numbers)}-${numbers.join("").toString("")}`
}
```
---
#### `Test Data`
```JavaScript
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Create Phone Number", () => {
  it("Fixed tests", () => {
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  });
});
```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

// Solution 2
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}

// Solution 3
function createPhoneNumber(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}
```
