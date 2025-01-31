function maxCross(A, low, mid, high) {
  let leftSum = -Infinity;
  let sum = 0;
  let maxLeft = null;
  for (i = mid; i >= low; i--) {
    sum += A[i];
    if (sum > leftSum) {
      leftSum = sum;
      maxLeft = i;
    }
  }
  let rightSum = -Infinity;
  sum = 0;
  let maxRight = null;
  for (i = mid + 1; i <= high; i++) {
    sum += A[i];
    if (sum > rightSum) {
      rightSum = sum;
      maxRight = i;
    }
  }
  return [maxLeft, maxRight, leftSum + rightSum];
}

function maxSub(A, low, high) {
  if (low == high) {
    return [low, high, A[low]]
  }
  else {
    let mid = Math.floor((low + high) / 2);
    let left = maxSub(A, low, mid);
    let right = maxSub(A, mid + 1, high);
    let cross = maxCross(A, low, mid, high);
    if (left[2] >= right[2] && left[2] >= cross[2]) {
      return left;
    }
    else if (cross[2] >= left[2] && cross[2] >= right[2]) {
      return cross;
    }
    else {
      return right;
    }
  }
}

let A = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
console.log(maxSub(A, 0, A.length - 1));
