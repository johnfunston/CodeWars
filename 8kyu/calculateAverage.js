// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    let arrayTotal = array.reduce((currentValue, previousValue) => currentValue + previousValue, 0);
    return (arrayTotal ? arrayTotal/array.length : 0)
  }