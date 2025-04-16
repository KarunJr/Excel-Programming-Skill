// 459. Repeated Substring Pattern
/*
Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
*/

const repeatedSubstringPattern = (s) => {
  for (let i = 1; i <= s.length / 2; i++) {
    if(s.length % i == 0){
    const substring = s.slice(0, i);
    const repated = substring.repeat(s.length / i);
    
    if (repated == s) return true;
    }
  }
  return false
};

const s = "aba";

const result = repeatedSubstringPattern(s);

console.log(result);
