## Handshake problem

Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).

---
#### `My Solution`
```JavaScript
function getParticipants(handshakes){
  const hs = handshakes;
  
  if (hs !== 0) {
    const x = Math.ceil((1+Math.pow(1+8*hs,0.5))/2); // Quadratic Equation form x2-x = 0
    return x;
  } else
    return 0;
}

```
#### `Test Result`
![image](https://user-images.githubusercontent.com/99033220/171801136-00bf1256-af7e-4004-8bb4-3a290f372b72.png)

---

#### `Top 3 Solution`
`Solution 1`
```JavaScript
function getParticipants(handshakes){
  let farmers = 0
  while(handshakes > farmers * (farmers - 1) / 2){
    farmers++
  }
  return farmers
}
```
`Solution 2`
```JavaScript
function getParticipants(handshakes){
  if(handshakes === 0) return 0;
  const d = 1 + 4 * 2 * handshakes;
  const result = (-1 + Math.ceil(Math.sqrt(d))) / 2;
  return Math.round(result) + 1;
}
```
`Solution 3`
```JavaScript
function getParticipants(handshakes){
  if(handshakes === 0) return 0
  let oldTarget = 1,
      target = 2,
      step = 0,
      count = 1,
      n = 1;
  while(n < handshakes+1){
    n++;
    if(  n < target && n > oldTarget) continue;
    else{
      count++;
      step++;
      oldTarget = target;
      target += step;
    }
  }
  return count
}
```
