## Are they the "same"?

![image](https://user-images.githubusercontent.com/99033220/172536606-b390ef9d-1d40-4963-b03a-78b233f89420.png)
![image](https://user-images.githubusercontent.com/99033220/172536673-1a18974b-81e9-472d-b2b0-75a677ed983e.png)
![image](https://user-images.githubusercontent.com/99033220/172536736-758ce4ed-3c78-44df-8012-deb74b2f90ee.png)

---
#### `My Solution`
```JavaScript
function comp(array1, array2){  
  if (array1 == null || array2 == null) {
    return false;
  } 
  
  let x = array1.slice().sort();
  let y = array2.map((element, array) => Math.pow(element, 0.5)).sort();

  // Getting the sum of all elem in the array
  function add(sum) {
    let z = sum.reduce((acc, curr) => acc+curr, 0);
    return z;
  } 

  if (add(x) === add(y)) {
    return true;
  } else {
    return false;
  }
}
```
#### `Test Result`
![image](https://user-images.githubusercontent.com/99033220/172537180-1f5670ff-392d-4c37-b33a-1f26e15bb8ef.png)

---
#### `Top 3 Solution`
```JavaScript
// Solution 1
function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

// Solution 2
function comp(a, b) {
  return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
}

// Solution 3
const comp = (array1, array2) => 
  Array.isArray(array1) &&
  Array.isArray(array2) &&
  array1.every(item => {
    const index = array2.indexOf(Math.pow(item, 2))
    return index > -1 ? array2.splice(index, 1) : false
  })
```
