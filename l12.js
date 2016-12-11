
// Applictive functors allow to apply a function in a Box
// to another value in a box. In general applicative functor allow us
// to apply funcitons in a box (context).

const Box = x => 
({
  of: x => Box(x),
  ap: functor => functor.map(x),
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`,
});

// const result = Box(x => y => x + y)
//                .ap(Box(2))
//                .ap(Box(3));

const liftA2 = (f, fx, fy) =>
  fx.map(f).ap(fy)  

const result = liftA2(
  x => y => x + y,
  Box(2),
  Box(3)
);             

console.log(result);