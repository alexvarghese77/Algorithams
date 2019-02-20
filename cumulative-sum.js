// Return an array showing the cumulative sum at each index of an array of integers

let arr = [1, 3, 5, 7];

const cumulativeSum = list => {
  cumulativeSumArr = [list[0]];
  for (let i = 1; i < list.length; i++) {
    cumulativeSumArr.push(cumulativeSumArr[i - 1] + list[i]);
  }
  return cumulativeSumArr;
};
console.log(cumulativeSum(arr));
