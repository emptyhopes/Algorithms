"use strict";

function Brackets(string) {
  const dictionary = {
    "(": {
      reverse: ")",
      value: 0,
    },
    "[": {
      reverse: "]",
      value: 0,
    },
    "{": {
      reverse: "}",
      value: 0,
    },
  };

  for (let index = 0; index < string.length; index++) {
    for (const value of Object.keys(dictionary)) {
      if (dictionary[value].value === -1) return false;
      if (string[index] === dictionary[value].reverse) dictionary[value].value = dictionary[value].value - 1;
    }

    if (dictionary[string[index]]) dictionary[string[index]].value = dictionary[string[index]].value + 1;
  }

  for (const value of Object.keys(dictionary)) {
    if (dictionary[value].value !== 0) return false;
  }

  return true;
}

console.log(Brackets("(){}[[]]"));
console.log(Brackets(")()()()([]"));
console.log(Brackets("())(()"));
