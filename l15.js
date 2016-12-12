const fs = require('fs');
const Task = require('data.task')
const futurize = require('futurize').futurize(Task)
const { List, Map } = require('immutable-ext')

const readFile = futurize(fs.readFile);

// const files = List(['l1.js', 'config.json'])
// .traverse(Task.of, fn => readFile(fn, 'utf-8'))
// .fork(
//   err => console.log('err', err),
//   result => console.log('result', result)
// );

const httpGet = (path, params) =>
  Task.of(`${path} result`)

const res = Map({home: ['/', 'home'], about: 'about'})
  .traverse(Task.of, routes => List(routes).traverse(Task.of, route => httpGet(route, {})))
  .fork(
    err => console.log('err', err),
    res => console.log('res', res)
  );

List([1, 2, 3]).traverse(Task.of, x => Task.of(x))
.fork(
  err => console.log('err',err),
  result => console.log('result', result)
);


