## Vowel Count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

---
#### `My 1st Solution`
```JavaScript
function getCount(str) {
  const count = str.match(/[aeiou]/gi).length;
  return count !== 0 ? count : 0;
}
```
The problem with this solution is when the input data has no vowels it will return null and the ".length" property will not execute.
![image](https://user-images.githubusercontent.com/99033220/170183182-2c648752-f63b-46d2-984e-b3d49b9ed3c4.png)

---
So I did a little bit of googling 😅
#### `My revised 1st Solution`
```JavaScript
function getCount(str) {
   return (str.match(/[aeiou]/ig)||[]).length;
}
```
#### `Explanation`
/[aeiou]/ig is a regular expression that will match any vowel. It will match any of a, e, i, o, u, 
the **i** flag (/[aeiou]/**i**g) makes it case-insensitive and the **g** flag stands for "global" or in other
words "don't stop after the first match".

There is a special case - if the initial string does not have any vowels, then the output would be the value null.

For that purpose the **||[]** is used which will return an empty array if the preceding value is falsey.

#### `Output`
![image](https://user-images.githubusercontent.com/99033220/170183674-18161d7c-1205-4d49-b0de-4c76216d5dbf.png)

---
#### `Top 3 Solution`
```JavaScript
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
```
```JavaScript
function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;
}
```
```JavaScript
function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}
```
