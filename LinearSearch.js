"use strict";

function LinearSearch(array, value) {
  let count = 0;

  if (typeof value !== "number") return undefined;

  for (let index = 0; index < array.length; index++) {
    count = count + 1;

    if (array[index] === value) return [index, count];
  }

  return undefined;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(LinearSearch(array, 10));
