// Find a duplicate number in an array of integers

const array = [1, 2, 3, 4, 5, 6, 5, 3];

const dupNum = array => {
  dupeArr = {};
  duplicateElements = [];
  for (let index = 0; index < array.length; index++) {
    if (dupeArr[array[index]]) {
      duplicateElements.push(array[index]);
    } else {
      dupeArr[array[index]] = array[index];
    }
  }
  console.log('array after removing duplicates', Object.values(dupeArr));
  console.log('array  duplicates', duplicateElements);
};

dupNum(array);
