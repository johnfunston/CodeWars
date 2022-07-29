// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    var vowelsCount = 0;
    let letterArray = str.split('')
    for (let i = 0; i < letterArray.length; i++) {
      if (letterArray[i] == 'a' || letterArray[i] == 'e' || letterArray[i] == 'i' || letterArray[i] == 'o' || letterArray[i] == 'u') {
        vowelsCount++
      }
    }return vowelsCount
  }