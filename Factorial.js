const factorial = (value) => {
  if (typeof value !== "number") return undefined;
  if (value < 1) return undefined;
  if (value === 1) return 1;

  return value * factorial(value - 1);
};

const factorial2 = (value) => {
  if (typeof value !== "number") return undefined;
  if (value < 1) return undefined;
  if (value === 1) return 1;

  let array = [];

  for (let index = 0; index < value + 1; index++) {
    if (index === 1) {
      array.push(1);
    }

    if (index > 1) {
      array.push(array[index - 2] * index);
    }
  }

  return [array, array[array.length - 1]];
};
