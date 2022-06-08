## Pair of gloves
![image](https://user-images.githubusercontent.com/99033220/172518145-bbc666d8-d6e1-42b4-8ce4-29a705e3c6cc.png)

---
#### `My Solutions`
```JavaScript
function numberOfPairs(gloves) {
  const glove = gloves.slice().sort();
  const pairs = [];

  for (let i = 0; i < glove.length - 1; i++) {
    if (glove[i] == glove[i+1]) {
      pairs.push(glove[i]);
      i++; // How?
    }
  }
  return pairs.length;
}
```

```JavaScript
function numberOfPairs(gloves){
   let arr = gloves.slice().sort((a,b)=>a.localeCompare(b))
   let pairs = 0;
   for (let i=0;i<arr.length;i++){
     if (arr[i-1]===arr[i]){
       pairs++;
       i++;
     }
   }
   return pairs;
}
```
#### `Test Result`
![image](https://user-images.githubusercontent.com/99033220/172518358-9bb9ecf4-0f1e-4ded-a112-9059005af81a.png)

---
#### `Top 3 Solution`
```JavaScript
function numberOfPairs(gloves){
function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}
let a=Math.floor(getAllIndexes(gloves,'Red').length/2)
let b=Math.floor(getAllIndexes(gloves,'Green').length/2)
let c=Math.floor(getAllIndexes(gloves,'Blue').length/2)
let d=Math.floor(getAllIndexes(gloves,'Gray').length/2)
let e=Math.floor(getAllIndexes(gloves,'Black').length/2)
let f=Math.floor(getAllIndexes(gloves,'Purple').length/2)
let g=Math.floor(getAllIndexes(gloves,'Lime').length/2)
let h=Math.floor(getAllIndexes(gloves,'Silver').length/2)
let i=Math.floor(getAllIndexes(gloves,'Maroon').length/2)
let j=Math.floor(getAllIndexes(gloves,'Navy').length/2)
let k=Math.floor(getAllIndexes(gloves,'Teal').length/2)
let l=Math.floor(getAllIndexes(gloves,'White').length/2)
let m=Math.floor(getAllIndexes(gloves,'Aqua').length/2)
let n=Math.floor(getAllIndexes(gloves,'Fuchsia').length/2)
let o=Math.floor(getAllIndexes(gloves,'Olive').length/2)
let p=Math.floor(getAllIndexes(gloves,'Yellow').length/2)
let aa=Math.floor(getAllIndexes(gloves,'red').length/2)
let bb=Math.floor(getAllIndexes(gloves,'green').length/2)
let cc=Math.floor(getAllIndexes(gloves,'blue').length/2)
let dd=Math.floor(getAllIndexes(gloves,'gray').length/2)
let ee=Math.floor(getAllIndexes(gloves,'black').length/2)
let ff=Math.floor(getAllIndexes(gloves,'purple').length/2)
let gg=Math.floor(getAllIndexes(gloves,'lime').length/2)
let hh=Math.floor(getAllIndexes(gloves,'silver').length/2)
let ii=Math.floor(getAllIndexes(gloves,'maroon').length/2)
let jj=Math.floor(getAllIndexes(gloves,'navy').length/2)
let kk=Math.floor(getAllIndexes(gloves,'teal').length/2)
let ll=Math.floor(getAllIndexes(gloves,'white').length/2)
let mm=Math.floor(getAllIndexes(gloves,'aqua').length/2)
let nn=Math.floor(getAllIndexes(gloves,'fuchsia').length/2)
let oo=Math.floor(getAllIndexes(gloves,'olive').length/2)
let pp=Math.floor(getAllIndexes(gloves,'yellow').length/2)



return a+b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+aa+bb+cc+dd+ee+ff+gg+hh+ii+jj+kk+ll+mm+nn+oo+pp

}
```




