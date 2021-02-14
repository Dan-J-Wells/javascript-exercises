const caesar = function(string, shift) {
  //Declarations
  const modshift = shift % 26;
  const capmax = 90;
  const capmin = 65;
  const capindex = 64;
  const lowmax = 122;
  const lowmin = 97;
  const lowindex = 96;
  let finalstring = '';

  function shifter(stringval, modshift, max, min, index) {
    const preshift = stringval + modshift;

    return (preshift > max) ? ((preshift - max) + index)
         : (preshift < min) ? (max - (index - preshift))
         : (preshift);
  }

  //Process  
  for (let i = 0; i < string.length; i++) {
    let stringval = string.charCodeAt(i);

    if (stringval >= capmin && stringval <= capmax) {
      let shiftedcode = shifter(stringval, modshift, capmax, capmin, capindex);
      let newstring = String.fromCharCode(shiftedcode);
      finalstring += newstring;
    }
    else if (stringval >= lowmin && stringval <= lowmax) {
      let shiftedcode = shifter(stringval, modshift, lowmax, lowmin, lowindex);
      let newstring = String.fromCharCode(shiftedcode);
      finalstring += newstring;
    }
    else finalstring += String.fromCharCode(stringval);
  }

  //Return
  return finalstring;
}

module.exports = caesar
