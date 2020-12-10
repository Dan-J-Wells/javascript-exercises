const removeFromArray = function() {
let args = Array.from(arguments);
let arr = args[0];
args.shift();

for (let i = 0; i < args.length; i++) {
  let index = arr.indexOf(args[i]);
  if (index === -1) {continue;}
  else {arr.splice(index, 1);}
}

return arr;
}

module.exports = removeFromArray
