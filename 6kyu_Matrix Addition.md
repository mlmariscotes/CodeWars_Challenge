## Matrix Addition

Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two. Both matrices being passed into the function will be of size N x N (square), containing only integers.

How to sum two matrices:

Take each cell `[n][m]` from the first matrix, and add it with the same `[n][m]` cell from the second matrix. This will be cell `[n][m]` of the solution matrix.

**Visualization:**

![image](https://user-images.githubusercontent.com/99033220/171771375-92b82f86-7ca8-4889-9d5b-2d8f5c198fcf.png)

**Example**

![image](https://user-images.githubusercontent.com/99033220/171771412-da987b4f-34e7-45be-b53b-d0d2427d3e8e.png)

---
#### `My Initial Solution`
```JavaScript
function matrixAddition(a, b){
  let z = [];
  
  for(let i = 0; i< a.length; i++) {
    for (let j = 0; i < a.length; j++) {
      let w = a[i][j] + b[i][j];
      z.push(w);
    }
  }
  return z;
}
```
#### `Test Result 1`
![image](https://user-images.githubusercontent.com/99033220/171771805-978cd3f3-dd79-4027-b4d5-ce6a6143d51f.png)
---

#### `My 2nd Solution w/ Google`

```JavaScript
function matrixAddition(a, b){
  let matrix = []; // Sum of input Matrix
  
  for (let i = 0; i < a.length; i++) {
    matrix.push([]); // Adds array
    for (let j = 0; j < a[i].length; j++) {
      matrix[i].push(a[i][j] + b[i][j]);
    }
  }
  return matrix;
}
```
#### `Test Result 2`
![image](https://user-images.githubusercontent.com/99033220/171771874-ec8b6cbf-a1e9-4a92-9319-86585d5cb3de.png)

