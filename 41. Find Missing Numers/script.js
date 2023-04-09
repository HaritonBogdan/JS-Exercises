function findMissingNumbers(arr) {
  // Find the maximum and minimum numbers in the array
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  // Create a new array with all the numbers in the range from min to max
  const fullArr = Array.from({ length: max - min + 1 }, (_, i) => i + min);

  // Find the missing numbers by comparing the original array to the full array
  return fullArr.filter((num) => !arr.includes(num));
}
