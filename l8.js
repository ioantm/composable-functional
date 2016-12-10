const {All, First, Sum} = require('./l5');
const { List } = require('immutable-ext');

All.empty = () => All(true);

const result = All(true).concat(All(true)).concat(All.empty());
console.log(result);

Sum.empty = () => Sum(0);

const Right = (x) => ({
  fold: (f, g) => g(x),
  map: f => Right(f(x)),
  concat: o =>
    o.fold(
      e => Left(e),
      r => Right(x.concat(r))
    ) 
})

const Left = () => ({
  fold: (f, g) => f(x),
  map: f => Left(x),
  concat: o => Left(x),
})

const r =Right(Sum(1)).concat(Right(Sum(2))).fold(x => x, x => x);
console.log(r);

// const res = List.of(Sum(1), Sum(3), Sum(5)).fold(Sum(5));

const res = List.of(1, 3, 4)
            .foldMap(Sum, Sum.empty());
console.log(res);