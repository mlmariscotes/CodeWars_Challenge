## Count of positives / sum of negatives
![image](https://user-images.githubusercontent.com/99033220/179134492-e643e241-f81f-49d8-b5c8-599ad62f8769.png)
---
```JavaScript
// My Solution
function countPositivesSumNegatives(input) {
  let pos = 0;  
  let neg = 0; 
  
  if(input == null || input.length < 1) {
    return [];
    } else {
      input.map(item => {
        if(item > 0) {
          pos++;
        } else if(item < 0) {
          neg += item;
        } else {
          return []
        }
      });
    }
  return [pos, neg]
}
```
