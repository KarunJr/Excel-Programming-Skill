// 242. Valid Anagram
/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
*/

const isAnagram = (s, t) => {
  const sfreq = new Map();
  const tfreq = new Map();
  for (const char of s) {
    if (sfreq.has(char)) {
      sfreq.set(char, sfreq.get(char) + 1);
    } else {
      sfreq.set(char, 1);
    }
  }

  for (const char of t) {
    if (tfreq.has(char)) {
      tfreq.set(char, tfreq.get(char) + 1);
    } else {
      tfreq.set(char, 1);
    }
  }
  if(sfreq.size !== tfreq.size) return false
  console.log(sfreq);
  console.log(tfreq);
  
  for (const [key, value] of sfreq) {
    if(tfreq.get(key) !== value){
        return false
    }
  }
  return true
  
  /*
    // By convering obj in array
    const string1 = JSON.stringify([...sfreq].sort())
    const string2 = JSON.stringify([...tfreq].sort())
    console.log(sfreq);
    console.log(tfreq);
    
    if(string1 === string2){
        return true
    }else{
        return false
    }*/
};

const s = "anagram";
const t = "nagaram";

const result = isAnagram(s, t);
console.log(result);
