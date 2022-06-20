## Product of consecutive Fib numbers
![image](https://user-images.githubusercontent.com/99033220/174527134-f5e02540-ead7-4123-b459-a1d625c70cce.png)
![image](https://user-images.githubusercontent.com/99033220/174527159-c36d8a79-b186-421e-846e-ad2d37375a95.png)

---
#### `My Solution`
```JavaScript
function productFib(prod){
  let arr = [0, 1];
  
  for (let i = 0; arr[arr.length-1] < prod; i++) {
    let y = arr[i] * arr[i+1];
    let x = arr[i] + arr[i+1];
    arr.push(x);
    
    if (y == prod) {
        return [arr[i], arr[i+1], true];
    } else if (y > prod) {
        return [arr[i], arr[i+1], false];
    }
  }
}
```
---
#### `Test Data`
```JavaScript
describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(productFib(4895), [55, 89, true])
Test.assertSimilar(productFib(5895), [89, 144, false])
Test.assertSimilar(productFib(74049690), [6765, 10946, true])
Test.assertSimilar(productFib(84049690), [10946, 17711, false])
Test.assertSimilar(productFib(193864606), [10946, 17711, true])
Test.assertSimilar(productFib(447577), [610, 987, false])
Test.assertSimilar(productFib(602070), [610, 987, true])

  });
});
```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
function productFib(prod){
  var n = 0;
  var nPlus = 1;  
  while(n*nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n*nPlus===prod];
}

// Solution 2
function productFib(prod){
  let [a, b] = [0, 1];
  while(a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}

// Solution 3
function productFib(prod){
  var a = 1
  var b = 1;
  while (a*b < prod) {
    var next = a+b;
    a = b;
    b = next;
  }
  return [a, b, a*b===prod];
}
```
