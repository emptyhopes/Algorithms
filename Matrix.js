const matrix = ["XOOXO", "XOOXO", "OOOXO", "XXOXO", "OXOOO"];

const Perimiter = (matrix) => {
  let perimiter = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== "X") continue;

      perimiter = perimiter + (i === 0 || matrix[i - 1][j] === "O");
      perimiter = perimiter + (j === 0 || matrix[i][j - 1] === "O");
      perimiter = perimiter + (i === matrix.length - 1 || matrix[i + 1][j] === "O");
      perimiter = perimiter + (j === matrix[i].length - 1 || matrix[i][j + 1] === "O");
    }
  }

  return perimiter;
};

console.log(Perimiter(matrix));
