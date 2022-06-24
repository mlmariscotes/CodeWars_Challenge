## Range Extraction
![image](https://user-images.githubusercontent.com/99033220/174204879-6af97c18-c966-466a-aff8-b1fa7eb190c3.png)
```JavaScript
solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
```
---
#### `My Solution`
```JavaScript
function solution(list)
{
  let result = "";
  let isRange = false;

  for (let i = 0; i < list.length; ++i)
  {
    const j = list[i];

    if (list[i + 1] !== j + 1)
    {
      if (isRange) result += (list[i] === list[i - 2] + 2) ? "-" : ",";
      result += j + ",";
      isRange = false;
    }
    else if (!isRange)
    {
      result += j;
      isRange = true;
    }
    debugger;
  }
  return result.slice(0, -1);
}
```
---
#### `Test Data`
```JavaScript
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20")
});
});
```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
function solution(individualIntegers) {
  return individualIntegers
    .reduce(splitIntoRanges, [])
    .map(convertToRange)
    .join(",");
}

function splitIntoRanges(ranges, number) {
  if (!ranges.length) {
    ranges.push([number]);
    return ranges;
  }

  var lastRange = ranges[ranges.length - 1];
  var lastNumber = lastRange[lastRange.length - 1];

  number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
  return ranges;
}

function convertToRange(range) {
  return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
}

// Solution 2
function solution(list){
   for(var i = 0; i < list.length; i++){
      var j = i;
      while(list[j] - list[j+1] == -1) j++;
      if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
  }
  return list.join();
}

// Solution 3
solution = (list)=>list.reduce((acc,curr,i) => {
  if (i==0) return curr.toString();
  if (list[i-1] == curr-1 && list[i+1] == curr+1) return acc;
  if (list[i-2] == curr-2 && list[i-1] == curr-1) return acc+"-"+curr;
  return acc+","+curr;
});
```

