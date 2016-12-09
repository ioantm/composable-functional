// const nextCharFronNumberString = str => {
//     const trimmed = str.trim();
//     const number = parseInt(trimmed);
//     const nextNumber = number + 1;
//     return String.fromCharCode(nextNumber);
// }

const Box = x => 
({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`,
});

// each expression has it's own state completely contained
// map is composition (function composition) within a context
const nextCharFronNumberString = str =>
  Box(str)
  .map(s => s.trim())
  .map(s => parseInt(s))
  .map(i => i + 1)
  .fold(i => String.fromCharCode(i));

const result = nextCharFronNumberString(' 64 ');

console.log(result);