function merge(A, p, q, r) {
  let L = [];
  let R = [];
  for (let i = p; i <= q; i++) {
    L.push(A[i]);
  }
  for (let i = q + 1; i <= r; i++) {
    R.push(A[i]);
  }
  L.push(Infinity);
  R.push(Infinity);
  let i = 0;
  let j = 0;
  for (k = p; k <= r; k++) {
    if (L[i] <= R[j]) {
      A[k] = L[i];
      i++;
    } else {
      A[k] = R[j];
      j++;
    }
  }
}

function mergeSort(A, p, r) {
  if (p < r) {
    let q = Math.floor((p + r) / 2);
    mergeSort(A, p, q);
    mergeSort(A, q + 1, r);
    merge(A, p, q, r);
  }
}

let A = [5, 2, 4, 7, 1, 3, 2, 6]
mergeSort(A, 0, A.length - 1);
console.log(A);
