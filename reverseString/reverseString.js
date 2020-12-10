const reverseString = function(string) {
  let split = string.split('');
  let reverse = '';

  for (i = (split.length - 1); i >= 0; i--) {
    reverse = reverse.concat(split[i]);
  }
  return reverse;
}

module.exports = reverseString
