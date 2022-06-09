## Find the vowels
![image](https://user-images.githubusercontent.com/99033220/172752609-d50c5cb9-fa08-4f8c-86a6-9fad2c36c971.png)

---
#### `My Solution`
```JavaScript
function vowelIndices(word){
  const arr = [];
  const x = word.toLowerCase().split("");
  const vow = ["a", "e", "i", "o", "u", "y"];
  // const y = word.match(/[aeiouy]/gi)||[];
  
  x.forEach((elem, index) => {
    if(vow.includes(elem)) {
      arr.push(index+1)
    }
  })
  return arr
}
```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
function vowelIndices(word) {
  var arr = [];
  for(var i = 0; i < word.length; i++) {
    if(/[aeioyu]/i.test(word[i])) {
      arr.push(i+1);
    }
  }
  return arr;
}

// Solution 2
function vowelIndices(word,a=[]){
  return (word.replace(/[aeiouy]/gi,(m,i)=>(a.push(i+1),m)),a)
}

// Solution 3
function vowelIndices(word){
  const str = 'aeiouy';
  const arr = word.toLowerCase().split('');
  let answer = [];
  arr.forEach((name, i) => {
    if (str.indexOf(name) !== -1) {
      answer.push(i + 1);
    }
  });
  return answer;
}
```
