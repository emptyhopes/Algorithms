"use strict";

const fibonachi = (value) => {
  if (typeof value !== "number") return undefined;
  if (value < 0) return undefined;
  if (value === 0) return 0;
  if (value === 1) return 1;
  if (value === 2) return 1;

  return fibonachi(value - 2) + fibonachi(value - 1);
};

const fibonachi2 = (value) => {
  if (typeof value !== "number") return undefined;
  if (value < 0) return undefined;

  let array = [];

  for (let index = 0; index < value + 1; index++) {
    if (index === 0) array.push(0);
    if (index === 1) array.push(1);
    if (index === 2) array.push(1);
    if (index > 2) array.push(array[index - 2] + array[index - 1]);
  }

  return [array, array[array.length - 1]];
};
