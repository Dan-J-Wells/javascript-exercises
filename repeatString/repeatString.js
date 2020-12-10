const repeatString = function(string, repeat) {
  if (repeat < 0) {
    return 'ERROR';
  }
  else {
    let repString = '';
    for (let i = 0; i < repeat; i++) {
      repString += string;
    }
    return repString;
  }
}

module.exports = repeatString
