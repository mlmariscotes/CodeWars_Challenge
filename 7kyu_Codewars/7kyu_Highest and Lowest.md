## Highest and Lowest

![image](https://user-images.githubusercontent.com/99033220/173288727-ff5c5dd0-374c-4098-a525-4091ee02cac1.png)

---
#### `My Solution`

```JavaScript
function highAndLow(numbers){
  numbers = numbers.split(" ");
  return Math.max(...numbers) +" "+ Math.min(...numbers);
}
```
