// 28. Find the Index of the First Occurrence in a String
/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

const strStr = (haystack, needle)=>{
    return haystack.indexOf(needle)
}
const haystack = "butsad"
const needle = "sad"

const result = strStr(haystack, needle);
console.log(result);
