## The Hashtag Generator

![image](https://user-images.githubusercontent.com/99033220/176325605-9254f297-a9e2-43ff-84bd-ff20dae3c62f.png)


---
```JavaScript
// My Solution
function generateHashtag (str) {
  if (str.trim() === "") return false;
  const word = str.toLowerCase().split(" ")
  const cap = word.map((elem) => {
    return elem.charAt(0).toUpperCase()+elem.slice(1);
  });
  
  let x = "#"+cap.join("")
  return x.length > 140 ? false :x;
};
```
---
```JavaScript
// TOP 3 SOLUTION
// Solution 1
function generateHashtag (str) {
  return str.length > 140 || str === '' ? false :
    '#' + str.split(' ').map(capitalize).join('');
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Solution 2
function generateHashtag (str) {
   if(!str || str.length < 1) return false;
   
   var r = '#' + str.split(' ').map(function(el) {
     return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
   }).join('');
   return r.length > 140?false:r;
};

// Solution 3
function generateHashtag (str) {

  var hashtag = str.split(' ').reduce(function(tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, '#');
  
  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
};
```
