"use strict";

const graph = {
  a: ["b", "c"],
  b: ["f"],
  c: ["d", "e"],
  d: ["f"],
  e: ["f"],
  f: ["g"],
};

const Graph = (graph, start, end) => {
  const queue = [];

  queue.push(start);

  while (queue.length > 0) {
    console.log(queue);
    const current = queue.shift();

    if (graph[current].includes(end)) return true;

    queue.push(...graph[current]);
  }

  return false;
};

console.log(Graph(graph, "a", "g"));
