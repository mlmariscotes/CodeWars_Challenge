## Greed is Good
![image](https://user-images.githubusercontent.com/99033220/185538727-2448af84-582b-4ad6-a403-288be5ffec96.png)
---
```JavaScript
function score(dice) {
  let score = 0;
  const counts = [0, 0, 0, 0, 0, 0, 0];
  for(const value of dice) {
    counts[value]++;
  }
  score += counts[1] < 3 ? counts[1] * 100 : 1000 + 100 * (counts[1] - 3);
  score += counts[2] >= 3 ? 200 : 0;
  score += counts[3] >= 3 ? 300 : 0;
  score += counts[4] >= 3 ? 400 : 0;
  score += counts[5] < 3 ? counts[5] * 50 : 500 + 50 * (counts[5] - 3);
  score += counts[6] >= 3 ? 600 : 0;
  return score;
}
```
