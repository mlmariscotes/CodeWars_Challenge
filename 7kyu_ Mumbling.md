## Mumbling

![image](https://user-images.githubusercontent.com/99033220/173295074-1a6ee472-095f-4708-917f-7b2954cafb44.png)

---
#### `My Solution`
```JavaScript
function accum(s) {
  const result = []
  const lowerStr = s.toLowerCase()

  for(let i = 0; i < lowerStr.length; i++) {
    let str = lowerStr[i].toUpperCase()
    for(let j = 0; j < i; j++) {
      str += lowerStr[i]
    }
    result.push(str)
  }

  return result.join("-")
}
```
