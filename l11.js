// Task are usefull for enclosing impure actions in a function and have 
// the rest code for the application pure

const Task = require('data.task');
const fs = require('fs');

const readFile = (filename, encoding) => 
  new Task((rej, res) => 
    fs.readFile(filename, encoding, (err, contents) => 
      err ? rej(err) : res(contents)))

const writeFile = (filename, contents) => 
  new Task((rej, res) => 
    fs.writeFile(filename, contents, (err, contents) => 
      err ? rej(err) : res(contents)));


const app = 
  readFile('config.json', 'utf-8')
  .map(contents => contents.replace(/8/g, '6'))
  .chain(contents => writeFile('config.json', contents));


app.fork(
  err => console.log('there was an erro ', err),
  result => console.log('success ', result)
);