const QuickSorting = (array) => {
  if (array.length === 0) return array;

  const left = 0;
  const right = array.length - 1;

  const less = [];
  const greater = [];

  const middle = Math.floor((left + right) / 2);

  for (let index = 0; index < array.length; index++) {
    if (array[index] === array[middle]) continue;
    if (array[index] < array[middle]) less.push(array[index]);
    if (array[index] > array[middle]) greater.push(array[index]);
  }

  return [...QuickSorting(less), array[middle], ...QuickSorting(greater)];
};

const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 512, -1525];

console.log(QuickSorting(array));
