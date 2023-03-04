"use strict";

function BinarySearch(array, value) {
  if (typeof value !== "number") return undefined;

  let count = 0;
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    count = count + 1;

    const middle = Math.floor((left + right) / 2);

    if (array[middle] === value) return [middle, count];
    if (array[middle] < value) left = middle + 1;
    if (array[middle] > value) right = middle - 1;
  }

  return undefined;
}

const BinarySearch2 = (array, left, right, value) => {
  if (typeof value !== "number") return undefined;

  const middle = Math.floor((left + right) / 2);

  if (array[middle] === value) return middle;
  if (array[middle] < value) return BinarySearch(array, middle + 1, right, value);
  if (array[middle] > value) return BinarySearch(array, left, middle - 1, value);
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(BinarySearch(array, 1));
console.log(BinarySearch(array, 2));
console.log(BinarySearch(array, 3));
console.log(BinarySearch(array, 4));
console.log(BinarySearch(array, 5));
console.log(BinarySearch(array, 6));
console.log(BinarySearch(array, 7));
console.log(BinarySearch(array, 8));
console.log(BinarySearch(array, 9));
console.log(BinarySearch(array, 10));

console.log(BinarySearch(array, -1000));
console.log(BinarySearch(array, 0));
console.log(BinarySearch(array, 11));
console.log(BinarySearch(array, 1000));

console.log(BinarySearch(array, []));
console.log(BinarySearch(array, undefined));
console.log(BinarySearch(array, null));
