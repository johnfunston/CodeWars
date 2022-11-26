// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
    const uniqueArray = [] // create an array to hold the unique values
    for(let i=0; i < iterable.length; i++) { //loop through the passed argument
      if(typeof iterable === 'string' && iterable.charAt(i) !== uniqueArray[uniqueArray.length - 1]) { //if the argument is type string, && the character at the current position is NOT the same as the last item in our array
        uniqueArray.push(iterable.charAt(i)) //then push it in to the array
      } else if (iterable[i] !== uniqueArray[uniqueArray.length - 1]) { //else if the argument is not a string (in this case must be an array of Ints), loop through in the same way as our above loop
        uniqueArray.push(iterable[i])
      }
    }
    return uniqueArray
  }