const {All, First, Sum} = require('./l5');
const { Map } = require('immutable-ext');

const acc1 = 
Map({
  name: First('Nico'),
  isPaid: All(true),
  points: Sum(10),
  friends: ['Franklin'], 
})

const acc2 = 
Map({
  name: First('Nico'),
  isPaid: All(false),
  points: Sum(2),
  friends: ['Gatsby'],
})

const res = acc1.concat(acc2);

console.log(res.toJS());