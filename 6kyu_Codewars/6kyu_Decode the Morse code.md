## Decode the Morse code
![image](https://user-images.githubusercontent.com/99033220/184785993-86f94b97-3756-41e5-ab9a-f45810aaf208.png)
![image](https://user-images.githubusercontent.com/99033220/184786027-29f078c5-282d-42a6-b508-666e87f8e1a1.png)
![image](https://user-images.githubusercontent.com/99033220/184786077-39940731-6657-44ea-9966-d8614239d08f.png)
---
```JavaScript
decodeMorse = function(morseCode){
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}
```
