## Remove String Spaces

Simple, remove the spaces from the string, then return the resultant string.

---

#### `My Solution`
```JavaScript
function noSpace(x){
  return x.replace(/\s+/g, "") // \s+ matches one more whitespaces
}
```

#### `Test Result`
![image](https://user-images.githubusercontent.com/99033220/172042120-06ac8222-f1fb-459c-81b4-a4d41741001b.png)
