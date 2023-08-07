function palindrome (str) {
  // use regular expressions to remove all non-alphanumeric characters
  const re = /[\W_]/g;
  // Lowercase the string and return a new string with all matches of a pattern replaced by a replacement
  const lowRegStr = str.toLowerCase().replace(re, '');
  // split string object into an array of strings. Reverse array in place and join all elements of an array into a string.
  const reverseStr = lowRegStr.split('').reverse().join('');
  // Check if reverseStr is strictly equals to lowRegStr and return a Boolean
  return reverseStr === lowRegStr;
}

palindrome('eye');
