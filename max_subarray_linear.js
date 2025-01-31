function maxSub(A) {
  let max = [0, 0, A[0]];
  let maxEnd = [0, 0, A[0]];
  for (let i = 1; i < A.length; i++) {
    maxEnd[1] = i;
    maxEnd[2] += A[i];
    if (maxEnd[2] < A[i]) {
      maxEnd[2] = A[i];
      maxEnd[0] = i;
    }
    if (maxEnd[2] > max[2]) {
      for (let j = 0; j < 3; j++) max[j] = maxEnd[j];
    }
  }
  return max;
}

let A = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
console.log(maxSub(A));
