## Framed Reflection
![image](https://user-images.githubusercontent.com/99033220/184282130-446357ec-ac2b-4a51-84b8-b9afb77b5c62.png)
---
```JavaScript
function mirror(text){
    let myText = text.split(" ")
    const longest = myText.reduce(function (a, b) { return a.length > b.length ? a : b; });
    let result ='*'.repeat(longest.length + 4) + "\n* "
    myText.forEach((text) => {
        result += text.split("").reverse().join("")
        if(longest.length > text.length){
            result += " ".repeat(longest.length - text.length)
        }
        result +=" *\n* "
    })
    result = result.substring(0, result.length -1)
    result += "*".repeat(longest.length + 3)
    return result
}
```
