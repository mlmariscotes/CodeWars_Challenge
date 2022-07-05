## Find the missing letter
![image](https://user-images.githubusercontent.com/99033220/177236288-11bd9eb5-0a93-4c90-8002-6e0e27be22a2.png)
---
```JavaScript
// My Solution
function findMissingLetter(array) {
  for (let i = 1; i < array.length; i++) {
    const curr = array[i].charCodeAt();
    const prev = array[i-1].charCodeAt();
    if(curr - prev !== 1) {
      return String.fromCharCode(prev + 1);
    };
  };
  return null;
};
```
---
```JavaScript
// Top3 Solution
// Solution 1
function findMissingLetter(array) {
  let first = array[0].charCodeAt(0)
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i)
    }
  }
  throw new Error("Invalid input")
};

// Solution 2
function findMissingLetter(array)
{
   var i=array[0].charCodeAt();
   array.map(x=>  x.charCodeAt()==i?i++:i);
   return String.fromCharCode(i);
}

// Solution 3
const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const start = alphabet.indexOf(array[0]);
  return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
};
```
