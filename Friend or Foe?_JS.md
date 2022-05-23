## Friend or Foe?

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.
```JavaScript
friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
```
Note: keep the original order of the names in the output.

---
#### `My Solution`
```JavaScript
function friend(friends){
  // filter creates a new array with 4 character word the input array.
  // We use (===) for strict comparison
  const myFriends = friends.filter(friends => friends.length === 4);
  return myFriends;
}
```

#### `Output`
![image](https://user-images.githubusercontent.com/99033220/169747199-33a3978b-bc08-470c-ac91-e1a63084c084.png)

#### `Sample Test`
```JavaScript
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
    assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
    assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
    assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])
  })
})
```
---
#### `Top 3 Solution`
```JavaScript
function friend(friends){
  return friends.filter(n => n.length === 4)
}
```
```JavaScript
const friend = friends => friends.filter(friend => friend.length == 4);
```
```JavaScript
function friend(friends){
  
  //Create new array called "myFriends" for add your friends
  var i,
      len = friends.length,
      myFriends = [];
  
  
  for (i = 0; i < len; i++) {
        
       //Check for names with length equal to four and it is not a number
       if(friends[i].length == 4 && isNaN(friends[i])) {
          myFriends.push(friends[i]);
       }
      
  }
    
  return myFriends;
}
```



