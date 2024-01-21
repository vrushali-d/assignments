/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
isAnagram('hello','hello!');
function isAnagram(str1, str2) {
  const freq = new Map();

  for(let i=0;i<str1.length;++i){
    let letter = str1 [i];
    letter = letter.toLowerCase();
    if(freq.has(letter)){
      let count = freq.get(letter);
      freq.set(letter,1+count);
    }
    else{
      freq.set(letter,1);
    }
  }
  //console.log(freq);
  let isAnagram = true;
  for(let i=0;i<str2.length;++i){
    let letter = str2 [i];
    letter = letter.toLowerCase();
    if(freq.has(letter) && freq.get(letter) > 0){
      freq.set(letter,freq.get(letter)-1);
    }
    else{
      isAnagram = false;
      break;
    }
  }
  let values =Array.from(freq.values()); 
  for(let i=0;i<values.length;i++){
    if(values[i] > 0){
      isAnagram = false;
      break;
    }
  }
  return isAnagram;
}

module.exports = isAnagram;
