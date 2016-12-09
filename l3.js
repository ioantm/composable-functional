// Either type allow us to map over values that are in a context where
// value is defined or may not be defined : Right constructor is for defined values
// Left constructor is for undefined values. This help to works with control flow
// for results that can have values or not.

const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`,
});

const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`,
});

// const result = Left(2)
//   .map(x => x + 1)
//   .map(x => x / 2)
//   .fold(x => 'error', x => x);

// const findColor = name => 
//   ({ red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'})[name]

const fromNullable = x => 
  x != null ? Right(x) : Left(null)

const findColor = name => fromNullable(
  ({ red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'})[name]
);

const result = findColor('yellow')
               .map(c => c.slice(1))
               .fold(e => 'no color',
                     c => c.toUpperCase());

console.log(result);