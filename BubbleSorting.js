"use strict";

function BubbleSorting(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      count = count + 1;

      let temporary = array[i];

      if (array[i] > array[j]) {
        array[i] = array[j];
        array[j] = temporary;
      }
    }
  }

  return [array, count];
}

const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];

console.log(BubbleSorting(array));
