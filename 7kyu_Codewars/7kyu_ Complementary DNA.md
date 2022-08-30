## Complementary DNA
![image](https://user-images.githubusercontent.com/99033220/187337443-4a002f4f-a5e1-4673-ba50-7df5a4525ef0.png)
---
```JavaScript
function DNAStrand(dna){
  let sequence = {
    "A": "T",
    "T": "A",
    "G": "C",
    "C": "G"
  }
  return dna.replace(/A|T|G|C/g, function(matched){
    return sequence[matched];
  });
}
```
