function findMax(vec) {
  let max = vec[0];

  for (let i = 1; i < vec.length; i++) {
    if (vec[i] > max) {
      max = vec[i];
    }
  }

  return max;
}
