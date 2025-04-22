// 58. Length of Last Word
/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
*/

const lengthOfLastWord = ()=>{
    const last = []

    let i = s.length - 1;
    while(i >= 0 && s[i] === " "){
        i--
    }

    while(i >= 0 && s[i] !== " "){
        last.push(s[i])
        i--
    }
    return last.length
}

const s = "moon"
const result = lengthOfLastWord(s)
console.log(result);


