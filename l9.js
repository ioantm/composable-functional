const LazyBox = g => ({
  fold: f => f(g()),
  map: f => LazyBox(() => f(g())),
});

const result = LazyBox(() => ' 64 ')
               .map(str => str.trim())
               .map(trimmed => new Number(trimmed))
               .map(number => number + 1)
               .map(n => String.fromCharCode(n))
               .fold(x => x);


console.log('result', result);