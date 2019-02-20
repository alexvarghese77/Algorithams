// Find the missing number in a given integer array of 1 to 100

let array = [1, 2, 3, 4, 5, 6, 7, 8, 10];

const findMissingNum = array => {
  if (array[0] != 1 || array[array.length - 1] != 100) {
    //assume that 1-100 numbers are present in the array then only we will get this output correctly
    return array[0] == 1 ? 100 : 1;
  }

  for (let index = 1; index < array.length; index++) {
    if (array[index] + 1 != array[index + 1]) {
      return array[index] + 1;
    }
  }
  return false;
};

console.log(findMissingNum(array));

// problem with this apporch we can find the duplicate number only for one element
