## Human readable duration format
![image](https://user-images.githubusercontent.com/99033220/174205483-eac44068-bcfd-4f5f-ba77-9bfab5d0e25d.png)
![image](https://user-images.githubusercontent.com/99033220/174205504-e51308d6-2848-4640-a21c-9186a92c7847.png)

---
#### `My Solution`
```JavaScript
function formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';
  
  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}
```
---
#### `Test Data`
```JavaScript
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(formatDuration(1), "1 second");
Test.assertEquals(formatDuration(62), "1 minute and 2 seconds");
Test.assertEquals(formatDuration(120), "2 minutes");
Test.assertEquals(formatDuration(3600), "1 hour");
Test.assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds");

  });
});
```
---
#### `Top 3 Solution`
```JavaScript
// Solution 1
unction formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';
  
  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}

// Solution 2
function formatDuration (seconds) {
  if(!seconds)return "now";
  var strout = "";
  var s = seconds%60;
  seconds = (seconds-s)/60;
  var m = seconds%60;
  seconds = (seconds-m)/60;
  var h = seconds%24;
  seconds = (seconds-h)/24;
  var d = seconds%365;
  seconds = (seconds-d)/365;
  var y = seconds;
  
  var english=[];
  if(y)english.push(y+" year"+(y>1?'s':''));
  if(d)english.push(d+" day"+(d>1?'s':''));
  if(h)english.push(h+" hour"+(h>1?'s':''));
  if(m)english.push(m+" minute"+(m>1?'s':''));
  if(s)english.push(s+" second"+(s>1?'s':''));
  
  return english.join(", ").replace(/,([^,]*)$/," and$1");
  
}

// Solution 3
var formatDuration = (function () {

  return function formatDuration (seconds) {
    return [{name: 'year',   size: 365 * 24 * 60 * 60 * 1},
            {name: 'day',    size:       24 * 60 * 60 * 1},
            {name: 'hour',   size:            60 * 60 * 1},
            {name: 'minute', size:                 60 * 1},
            {name: 'second', size:                      1}].
            reduce(parse, { parts: [], seconds: seconds }).
            parts.
            reduce(join, 'now');
  };
  
  function parse (result, part) {
    var quantity = Math.floor(result.seconds / part.size);
    if (quantity > 0) {
      result.seconds -= quantity * part.size;
      result.parts.push(quantity + ' ' + part.name + (quantity == 1 ? '' : 's'));
    }
    return result;
  }
  
  function join (result, part, index, arr) {
    switch (index) {
      case 0: return part;
      case arr.length - 1: return result + ' and ' + part;
      default: return result + ', ' + part;
    }
  }
  
}());
```


