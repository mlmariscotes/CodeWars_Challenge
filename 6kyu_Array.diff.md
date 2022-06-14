## Array.diff

![image](https://user-images.githubusercontent.com/99033220/173483020-01420c36-e1a0-4210-91b9-e695dab87bdd.png)

---
#### `My Solution`
```JavaScript
function arrayDiff(a, b) {
  return a.filter((elem) => !b.includes(elem));
}
```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

// Solution 2
function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}

// Solution 3
function array_diff(a, b) {
  b = new Set(b)
  return a.filter(v => !b.has(v))
}

```
