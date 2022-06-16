## FIXME: Replace all dots

The code provided is supposed replace all the dots `.` in the specified String `str` with dashes `-`

But it's not working properly.

**Task**

Fix the bug so we can all go home early.

**Notes**

String `str` will never be null.

---

#### `My Solution`
```JavaScript
var replaceDots = function(str) {
  return str.replace(/\./g, '-');
}
```
#### `Test Result`
![image](https://user-images.githubusercontent.com/99033220/172041754-92d6ce62-a844-4eb4-b139-1d7c48e492d5.png)

