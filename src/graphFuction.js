export function max(arr) {
  let max = 0;
  for (const i of arr) {
    if (max < i) max = i;
  }
  return max;
}

export function avg(arr) {
  let avg = 0;
  let sum = 0;
  for (const i of arr) {
    sum += i;
  }
  avg = sum / arr.length;
  return avg;
}

export function min(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  for (const i of arr) {
    if (min > i) min = i;
  }
  return min;
}
