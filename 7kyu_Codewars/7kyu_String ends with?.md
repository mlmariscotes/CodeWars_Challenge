## String ends with?
![image](https://user-images.githubusercontent.com/99033220/181871320-8c850719-d314-4635-80b6-41e9ebc6f191.png)
```JavaScript
function solution(str, ending){ 
  if (ending.length == 0) return true;
  return (str.slice(-ending.length) === ending) ? true : false;
}
```
