const fs = require('fs');
const Task = require('data.task')
const futurize = require('futurize').futurize(Task)
const { List } = require('immutable-ext')

const readFile = futurize(fs.readFile);

const files = List(['l1.js', 'config.json'])
.traverse(Task.of, fn => readFile(fn, 'utf-8'))
.fork(
  err => console.log('err', err),
  result => console.log('result', result)
);

