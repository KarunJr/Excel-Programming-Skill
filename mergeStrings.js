// 1768. Merge Strings Alternately
/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
*/
//This is using for loop
const mergeAlternately = (word1, word2) => {
  let mergeString = "";
  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if(i < word1.length){
        mergeString += word1[i]
    }
    if(i < word2.length){
        mergeString += word2[i]
    }
  }
  return mergeString
};

const word1 = "abc";
const word2 = "pqr";

const result = mergeAlternately(word1, word2);
console.log(result);

/*
//This using while loop
const mergeAlternately = (word1, word2) => {
  let mergeString = [];
  let i = 0;
  let j = 0;

  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      mergeString.push(word1[i]);
      i++;
    }

    if (j < word2.length) {
      mergeString.push(word2[j]);
      j++;
    }
  }

  return mergeString.join("");
};

const word1 = "abc";
const word2 = "pqr";

const result = mergeAlternately(word1, word2);
console.log(result);
*/
