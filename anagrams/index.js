/**
 *
   Check to see if two provided strings are anagrams of each other.
   One string is an anagram of another if it uses the same characters
   in the same quantity. Only consider characters, not spaces
   or punctuation.  Consider capital letters to be the same as lower case
   --- Examples
   anagrams('rail safety', 'fairy tales') --> True
   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
   anagrams('Hi there', 'Bye there') --> False
 *
 */

function cleanString(str) {
  return str
    .replace(/[^\w]/g, "") // ^ negates match, so this matches all non alphanumeric characters (and underscore)
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

function buildCharMap(str) {
  const charMap = {};

  for (const char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function anagrams2(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (const char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

module.exports = {
  anagrams,
  anagrams2
};
