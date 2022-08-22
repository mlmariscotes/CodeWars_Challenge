## Build a pile of Cubes
![image](https://user-images.githubusercontent.com/99033220/185833595-fd1d608a-1dbd-4c49-9517-66d8adde8972.png)
---
```JavaScript
function findNb(m) {
    let n = parseInt(Math.sqrt(2 * (Math.sqrt(m)))) - 1;
    while ( ((n * (n+1))/2) ** 2 < m ) {
      n++;
    }
    return ((n * (n+1))/2) ** 2 > m ? -1 : n;
}
```
