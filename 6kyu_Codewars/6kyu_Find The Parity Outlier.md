## Find The Parity Outlier

![image](https://user-images.githubusercontent.com/99033220/174232431-7eb4c5b2-16b7-49c0-96fb-83ae66031735.png)
---

#### `My Solution`
```JavaSript
function findOutlier(integers){
  let even = [];
  let odd = [];
  
  const num = integers.forEach((elem, index) => {
    if (elem % 2 == 0 || elem == 0) {
      even.push(elem);
    } else {
      odd.push(elem);
    }
  });  
  
  return (even.length == 1) ? even[0] : odd[0];  
}
```

#### `Test Data`
```JavaSript
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(findOutlier([0, 1, 2]), 1)
    Test.assertEquals(findOutlier([1, 2, 3]), 2)
    Test.assertEquals(findOutlier([2,6,8,10,3]), 3)
    Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
    Test.assertEquals(findOutlier([1,1,0,1,1]), 0)
  });
});

```
#### `Top 3 Solution`
```JavaSript
// Solution 1
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}

// Solution 2
function findOutlier(integers){
  return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
}
function even(num){
  return (num % 2 == 0);
}
function odd(num){
  return !even(num)
}

// Solution 3
function findOutlier(integers){
  const even = integers.filter(int => int % 2 === 0);
  const odd  = integers.filter(int => int % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}

```
