const ftoc = function(temp) {
  let convert = (temp - 32) * (5 / 9);
  return +convert.toFixed(1);
}

const ctof = function(temp) {
  let convert = ((9 / 5) * temp) + 32;
  return +convert.toFixed(1);
}

module.exports = {
  ftoc,
  ctof
}
