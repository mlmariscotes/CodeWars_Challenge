## Find the smallest integer in the array
![image](https://user-images.githubusercontent.com/99033220/181144573-7f162b92-39d4-4b55-a7ba-fe24379a928b.png)
---
```JavaScript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce((a, b) => Math.min(a, b));
  }
}
```
