let findTheOldest = function(people) {
  function reducer(accumulator, currentValue) {
    const today = new Date();

    //age of current object
    const currentAge = ("yearOfDeath" in currentValue) ? 
    currentValue.yearOfDeath - currentValue.yearOfBirth : 
    today.getFullYear() - currentValue.yearOfBirth;

    //age of current oldest object
    const currentOldest = ("yearOfDeath" in accumulator) ? 
    accumulator.yearOfDeath - accumulator.yearOfBirth : 
    today.getFullYear() - accumulator.yearOfBirth;

    return (currentOldest > currentAge) ? accumulator : currentValue;
  }
  return people.reduce(reducer);
}

module.exports = findTheOldest
