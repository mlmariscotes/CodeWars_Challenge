## Ghostbusters (whitespace removal)

Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

**Example:**

![image](https://user-images.githubusercontent.com/99033220/172091688-a0d77446-5f0b-4392-a72b-daad6c028de2.png)

**Should return:**

![image](https://user-images.githubusercontent.com/99033220/172091711-deb740aa-d9d8-4eb3-96c7-f233fbf69c7a.png)

**If the building contains no ghosts, return the string:**

![image](https://user-images.githubusercontent.com/99033220/172091741-61b30e16-6a61-4eae-898f-e48739ea05b1.png)

---

#### `My Solution`
```JavaScript
function ghostBusters(building) {
   const x = /\s+/g.test(building);
   let y = building.replace(/\s+/g, "")
   
   if (x === true) {
       return y
   } else {
       return "You just wanted my autograph didn't you?"
   }
}
```
#### `Test Result`
![image](https://user-images.githubusercontent.com/99033220/172092286-510cbe51-b90f-481a-8448-38cc7082a6cc.png)

---
#### `Top 3 Solution`
```JavaScript
function ghostBusters(building) {
  return /\s/.test(building) ? building.replace(/\s+/g, '') : "You just wanted my autograph didn't you?";
}
```
```JavaScript
let ghostBusters = s => / /.test(s) ? s.replace(/ /g, '') : 'You just wanted my autograph didn\'t you?';
```

```JavaScript
const ghostBusters = ($) => 
  $.replace(/\s/g, '') === $ ? "You just wanted my autograph didn't you?" : $.replace(/\s/g, '')
```


