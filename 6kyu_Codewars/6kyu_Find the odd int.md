## Find the odd int

![image](https://user-images.githubusercontent.com/99033220/173307103-58a37df5-5b63-43f9-9f2a-e9cc0d86900b.png)
---
#### `My Solution`
```JavaScript
function findOdd(arr) {
  for(let i = 0; i < arr.length; i++){
    const count = arr.filter((elem) => elem === arr[i]).length;
    if(count % 2 == 1){
      return arr[i];
    }
  }
}
```
