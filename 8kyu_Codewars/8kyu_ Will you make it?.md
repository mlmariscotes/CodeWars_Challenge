## Will you make it?
![image](https://user-images.githubusercontent.com/99033220/175478821-1b789d81-a4c8-4dcd-9daf-908f082ba741.png)

---
#### `My Solution`
```JavaScript
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump;
};
```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump/mpg <= fuelLeft
};

// Solution 2
const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;

// Solution 3
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return (mpg * fuelLeft) >= distanceToPump;
};
```
