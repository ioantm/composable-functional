//Semi-group are a type with a concat method that are associative

const Sum = x => ({
  x,
  concat: ({x : y}) =>
    Sum(x + y),
  inspect: () => `Sum(${x})`,
});

const All = x => ({
  x,
  concat: ({ x: y}) =>
    All(x && y),
  inspect: () => `All(${x})`,
})

const First = x => ({
  x,
  concat: (_) =>
    First(x),
  inspect: () => `First(${x})`,
})

const result = First('ala').concat(First('bala'));

console.log(result);