/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
isPalindrome('hello');
function isPalindrome(str) {
  str = str.toLowerCase();
  let filterStr = '';
  for(let i=0;i<str.length;++i){
    let n = str.charCodeAt(i);
    if(n>='a'.charCodeAt(0) && n<='z'.charCodeAt(0)){
      filterStr+=str[i];
    }
  }

  if(str.length === 0 || str.length === 1){
    return true;
  }

  let isPalindrome = true;
  for(let i=0;i<filterStr.length/2;i++){
    if(filterStr[i]!==filterStr[filterStr.length - i -1]){
      isPalindrome = false;
    }
  }
  return isPalindrome;
}

module.exports = isPalindrome;
