## Even or Odd

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

---

#### `My Solution`
```JavaScript
function even_or_odd(number) {
    return (number % 2 == 0) ? "Even" : "Odd";
}
```
---

#### `Test Data`
```JavaScript
const chai = require('chai');
const assert = chai.assert;

describe("Sample tests",() => {
  
  it("2 is even", () => {
    assert.strictEqual(even_or_odd(2), "Even");
  });
  it("7 is odd", () => {
    assert.strictEqual(even_or_odd(7), "Odd");
  });
  it("-42 is even", () => {
    assert.strictEqual(even_or_odd(-42), "Even");
  });
  it("-7 is odd", () => {
    assert.strictEqual(even_or_odd(-7), "Odd");
  });
  it("0 is even", () => {
    assert.strictEqual(even_or_odd(0), "Even");
  });
});

```
