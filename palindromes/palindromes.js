const palindromes = function(str) {
  const initialString = str.toLowerCase().replace(/[^a-z]/g, '');
  const newString = initialString.split('').reverse().join('');
  return (initialString === newString) ? true : false;
}

module.exports = palindromes
