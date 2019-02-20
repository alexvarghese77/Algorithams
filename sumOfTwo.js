// Find all pairs in an array of integers whose sum is equal to a given number

let arr = [1, 5, 6, 1, 0, 1];
const findSumPairs = (array, value) => {
  let hashmap = {};
  let output = [];

  for (let i = 0; i < array.length; i++) {
    let targetedValue = value - array[i];
    if (hashmap[targetedValue]) {
      output.push([array[i], targetedValue]);
    } else {
      hashmap[array[i]] = array[i];
    }
  }
  return output;
};
console.log(findSumPairs(arr, 6));
