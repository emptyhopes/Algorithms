"use strict";

function palindrom(value) {
  value = value.toLowerCase();

  const left = 0;
  const right = value.length - 1;

  const middle = Math.floor((left + right) / 2);

  for (let index = 0; index <= middle; index++) {
    if (value[index] !== value[right - index]) return false;
  }

  return true;
}

function palindrom2(value) {
  if (value.toLowerCase() === value.toLowerCase().split("").reverse().join("")) return true;
  else return false;
}

console.log(palindrom("aaaZzAaA"));
