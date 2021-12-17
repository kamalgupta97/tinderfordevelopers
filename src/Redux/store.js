function letsDebug(n) {
  if (n == 1) {
    return 1;
  }
  return letsDebug(n - 1);
}

var val = letsDebug(2);
console.log(val);
