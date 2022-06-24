## Upstream_Downstream

![image](https://user-images.githubusercontent.com/99033220/175445831-0bfd20cf-ef87-4fbd-817a-dbe8ae4b2af8.png)

#### `My Solution`
```JavaScript
function time(distance,boatSpeed,stream){
  let arr = stream.split(" ");
  let num = Number(arr[1]);

  if(arr[0] == "Downstream") {
    return (distance / (boatSpeed + num)).toFixed(2)*1;
  } else {
     return (distance / (boatSpeed - num)).toFixed(2)*1;
  }
};
```

