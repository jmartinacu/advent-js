function findMissingNumbers(nums: number[]): number[] {
  const uniqueNums = new Set(nums);
  const numsMax = Math.max(uniqueNums.keys.length, ...nums);
  const result: number[] = [];
  for (let i = 1; i < numsMax; i++) {
    if (!uniqueNums.has(i)) {
      result.push(i);
    }
  }
  return result;
}

console.log(findMissingNumbers([1, 2, 4, 6]));
// [3, 5]

console.log(findMissingNumbers([4, 8, 7, 2]));
// [1, 3, 5, 6]

console.log(findMissingNumbers([3, 2, 1, 1]));
// []

console.log(findMissingNumbers([5, 5, 5, 3, 3, 2, 1]));
// [4]
