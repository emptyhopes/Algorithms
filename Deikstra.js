"use strict";

const graph = {
  a: { b: 2, c: 1 },
  b: { f: 7 },
  c: { d: 5, e: 2 },
  d: { f: 2 },
  e: { f: 1 },
  f: { g: 1 },
  g: {},
};

const Deikstra = (graph, start, end) => {
  const costs = {};
  const processed = [];

  let neighbors = {};

  for (const node of Object.keys(graph)) {
    if (start !== node) costs[node] = graph[start][node] || Infinity;
  }

  let node = FindNodeLowestCost(costs, processed);

  while (node) {
    neighbors = graph[node];

    for (const neighbor of Object.keys(neighbors)) {
      if (costs[node] + neighbors[neighbor] < costs[neighbor]) costs[neighbor] = costs[node] + neighbors[neighbor];
    }

    processed.push(node);

    node = FindNodeLowestCost(costs, processed);
  }

  return costs;
};

const FindNodeLowestCost = (costs, processed) => {
  let LowestCost = Infinity;
  let LowestNode;

  for (const node of Object.keys(costs)) {
    if (costs[node] > LowestCost) continue;
    if (processed.includes(node)) continue;

    LowestCost = costs[node];
    LowestNode = node;
  }

  return LowestNode;
};

console.log(Deikstra(graph, "a", "g"));
