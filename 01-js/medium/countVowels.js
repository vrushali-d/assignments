/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count = 0;
    str = str.toLowerCase();
    for(let ch of str){
      if(ch === 'a' || ch === 'e' || ch ==='i' || ch === 'o' || ch === 'u'){
        count+=1;
      }
    }
    return count;
}

module.exports = countVowels;