const Tree = (tree) => {
  const stack = [];

  let temporary = 0;

  stack.push(...tree);

  while (stack.length !== 0) {
    const current = stack.pop();

    if (typeof current.value === "number") temporary = temporary + current.value;
    if (current.childrens !== undefined) stack.push(...current.childrens);
  }

  return temporary;
};

let temporary = 0;

const Tree2 = (tree) => {
  for (let index = 0; index < tree.length; index++) {
    if (typeof tree[index].value === "number") temporary = temporary + tree[index].value;
    if (tree[index].childrens !== undefined) Tree2(tree[index].childrens);
  }

  return temporary;
};

const tree = [
  {
    value: 5,
    childrens: [
      {
        value: 10,
        childrens: [
          {
            value: 11,
          },
        ],
      },
      {
        value: 7,
        childrens: [
          {
            value: 5,
            childrens: [
              {
                value: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: 5,
    childrens: [
      {
        value: 10,
      },
      {
        value: 15,
      },
    ],
  },
];

console.log(Tree(tree));
