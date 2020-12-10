const sumAll = function(a, b) {
  let value = 0;

  if (typeof(a) !== 'number' || typeof(b) !== 'number') {
    return 'ERROR';
  }  
  else if (a < 0 || b < 0) {
    return 'ERROR';
  }
  else {
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
      value += i;
    }
  }

  return value;
}

module.exports = sumAll
