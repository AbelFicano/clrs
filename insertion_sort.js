let A = [5, 2, 4, 6, 1, 3];
let n = A.length;
for (let i = 0; i < n-1; i = i + 1) {
  j = i + 1;
  let a = A[j];
  while (A[j] < A[j-1]) {
    A[j] = A[j-1];
    A[j-1] = a;
    j = j - 1;
  }
}
console.log(A);
