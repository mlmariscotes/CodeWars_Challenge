## Stop gninnipS My sdroW
#### Spinning word
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: 

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 

spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

---
#### `My Solution`
```JavaScript
function spinWords(string){
  // /\w{5,}/ find words in the string that has 5 characters.
  // if characters is equal or greater than 5. (1) split word to array. (2) reverse the array. (3) join into a string.
  let wordReverse =  string.replace(/\w{5,}/g, word => word.split('').reverse().join(''));
  return wordReverse;                                    
}

console.log(spinWords("Hey fellow warriors")); // Output: Hey wollef sroirraw
```
#### `Output`
![image](https://user-images.githubusercontent.com/99033220/169735436-9f671d04-8421-47ea-b198-6fbbcbc1a94c.png)


#### `Sample Test`
```JavaScript
const chai = require("chai");
const assert = chai.assert;

describe("Spinning words",()=>{
  it("Sample tests",()=>{
    assert.strictEqual(spinWords("Welcome"), "emocleW");
    assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
    assert.strictEqual(spinWords("This is a test"), "This is a test");
    assert.strictEqual(spinWords("This is another test"), "This is rehtona test");
    assert.strictEqual(spinWords("You are almost to the last test"), "You are tsomla to the last test");
    assert.strictEqual(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
    assert.strictEqual(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");
  });
});
```
---
#### `Top 3 Solution`
`Solution 1`
```JavaScript
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}
```
`Solution 2`
```JavaScript
function spinWords(string){
  return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}
```
`Solution 3`
```JavaScript
function spinWords(str){
  return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
}
```


