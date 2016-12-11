// List are applicative functors that have a computational context of non-determinism
// having multiple possible values and when apply a list of functions to
// a list of values we have another list with increased nondeterminism 

const { List } = require('immutable-ext')

const result = List.of(x => y => `${x} - ${y}`)
               .ap(List.of('teeshirt', 'sweater'))
               .ap(List.of('large', 'medium', 'small'))

console.log(result);   

const res1 =  (List.of(x => x + 1)).ap(List.of(1, 2));

console.log(res1);       
