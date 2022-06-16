## Good vs Evil

Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain `worth` when battling against others. On the side of good we have the following races, with their associated `worth`:

![image](https://user-images.githubusercontent.com/99033220/172086462-99e2f5e5-3b87-4eb6-9547-9cea1f3f9c09.png)

Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

**Input:**

The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:

- Hobbits, Men, Elves, Dwarves, Eagles, Wizards.

The second parameter will contain the count of each race on the side of evil in the following order:

- Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.

All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

**Output:**

Return `"Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.`

---

#### `My Solution`
```JavaScript
function goodVsEvil(good, evil){
    let go = 0;
    let ev = 0;
    
    let x = good.split(' ').map(Number);
    let y = evil.split(' ').map(Number);
    
        // Good
    for (let i = 0; i < x.length; i++) {
        go = go + Number(x[i]);
    }
    
    // Evil
    for (let j = 0; j < y.length; j++) {
        ev = ev + Number(y[j]);
    }
    
    //console.log(go, ev)
 
    if (go < ev) {
        return 'Battle Result: Evil eradicates all trace of Good';
    } else if (go > ev) {
        return 'Battle Result: Good triumphs over Evil';
    } else {
        return 'Battle Result: No victor on this battle field';
    }
}
```
#### `Test Result`
![image](https://user-images.githubusercontent.com/99033220/172086732-2c126145-059b-46d1-9336-5e732b4e71ce.png)

#### `Note`
`The code pass the initial testing but when I try the attempt, It gives my an error.` 😡

--- 
#### `Submitted Solution`
```JavaScript
function goodVsEvil(good, evil) {
  good = good.split(' ');
  evil = evil.split(' ');
    

  //hobbits, men, elves, etc
  let goodWorth = [1, 2, 3, 3, 4, 10];
  //orcs, men, wargs, etc  
  let evilWorth = [1, 2, 2, 2, 3, 5, 10];

  let goodArmyPoints = [];
  //multiply goodWorth by type:
  for (let i = 0; i < goodWorth.length; i++) {
    goodArmyPoints.push(good[i] * goodWorth[i]);
  }

console.log(goodArmyPoints);


  goodArmyPoints = goodArmyPoints.reduce(function (sum, value) {
    return sum + value;
  });
console.log(goodArmyPoints); 


  let evilArmyPoints = [];
  for (let j = 0; j < evilWorth.length; j++) {
    evilArmyPoints.push(evil[j] * evilWorth[j]);
  }
  console.log(evilArmyPoints);

  evilArmyPoints = evilArmyPoints.reduce(function (sum, value) {
    return sum + value;
  });
  
    console.log(evilArmyPoints);

  if (evilArmyPoints < goodArmyPoints) {
    return "Battle Result: Good triumphs over Evil";
  } else if (evilArmyPoints > goodArmyPoints) {
    return "Battle Result: Evil eradicates all trace of Good";
  } else {
    return "Battle Result: No victor on this battle field";
  }

}
```
---

#### `Top Solution`
```JavaScript
function goodVsEvil(good, evil) {  
  var getWorth = function( side, worth ) {
    return side.split(' ').reduce( function(result, value, index) { 
      return result + (worth[index] * value);
    }, 0);
  }

  var result = getWorth( good, [1,2,3,3,4,10] ) - getWorth( evil, [1,2,2,2,3,5,10] );

  return result > 0 ? "Battle Result: Good triumphs over Evil" :
         result < 0 ? "Battle Result: Evil eradicates all trace of Good" :
                      "Battle Result: No victor on this battle field";
}
```


