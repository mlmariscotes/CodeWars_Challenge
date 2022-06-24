## Consecutive items

![image](https://user-images.githubusercontent.com/99033220/175440606-e7602a60-e67f-451f-a1e7-8e9d63e9fa61.png)

---
#### `My Solution`
```JavaScript
function consecutive(arr, a, b) {
  return Math.abs(arr.indexOf(a)-arr.indexOf(b)) === 1;
}
```
