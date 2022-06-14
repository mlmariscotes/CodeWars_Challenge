## Human Readable Time
![image](https://user-images.githubusercontent.com/99033220/173517414-20f7cca1-78bb-4013-95d1-2b5798c32805.png)

---
#### `My Solution`
```JavaScript
function humanReadable (seconds) {
  let hr = Math.trunc(seconds / 3600);
  let min = Math.trunc(((seconds/3600) - hr) * 60);
  let sec = Math.round(((((seconds/3600) - hr) * 60) - min) * 60);
  
  let h = (hr > 0) ?  hr : 0;
  let m = (min > 0) ? min : 0;
  let s = (sec > 0) ?  sec : 0;
  
  let conv = function(e) {
      return e.toString().padStart(2, "0");
  }

  return `${conv(h)}:${conv(m)}:${conv(s)}`;
}
```

---
#### `Top 3 Solution`
```JavaScript
// Solution 1
function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}

// Solution 2
function humanReadable(seconds) {
var hours = parseInt( seconds / 3600 ) ;
var minutes = parseInt( seconds / 60 ) % 60;
var seconds = seconds % 60;

var pad = function(val){
  return val < 10 ?"0"+val:val;
}

return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
}

// Solution 3
function humanReadable(seconds) {
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
    v = Math.floor(v).toString();
    return v.length == 1 ? '0' + v : v;
  }).join(':');
}
```
