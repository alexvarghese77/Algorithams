//Find the largest and smallest number in an unsorted array of integers

const arr = [1, 2, 3, 4, 100];

const minAndMax = array => {
  let min = array[0];
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  return {
    max: max,
    min: min
  };
};

console.log(minAndMax(arr));
