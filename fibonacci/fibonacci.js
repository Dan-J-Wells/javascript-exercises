const fibonacci = function(input) {
  //Ensuring positive num or numerical string
  const num = (isNaN(input)) ? +input
      : (Math.sign(input) < 0) ? "OOPS"
      : input;

  if (isNaN(num)) return num;

  //Fibonacci generator
  if(num <= 2) return 1;

  let sequence = [1, 1];
  for (let i = 2; i < num; i++) {
    const nextVal = sequence[i - 2] + sequence[i - 1];
    sequence.push(nextVal);
  }
  return sequence[num - 1];
}

module.exports = fibonacci
