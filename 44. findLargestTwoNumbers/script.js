function findLargestTwoNumbers(vec) {
  let vecRev = vec.sort((a, b) => b - a);
  let newVec = [vecRev[0], vecRev[1]];
  return newVec;
}
