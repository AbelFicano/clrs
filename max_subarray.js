function maxSub(A) {
  let maxSum = -Infinity;
  let low = null;
  let high = null;
  for (let i = 0; i < A.length; i++) {
    let sum = 0;
    for (let j = i; j < A.length; j++) {
      sum += A[j]
      if (sum > maxSum) {
        maxSum = sum;
        low = i;
        high = j;
      }
    }
  }
  return [low, high, maxSum];
}

let A = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
console.log(maxSub(A));
