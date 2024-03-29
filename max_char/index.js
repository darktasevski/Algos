// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let mostCommonChar = "";

  for (const char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      mostCommonChar = char;
    }
  }

  return mostCommonChar;
}

module.exports = maxChar;
