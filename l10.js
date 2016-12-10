const Task = require('data.task');

const result = Task.of(1)
               .chain(x => Task.of(10 + x))
               .map(x => x + 1)
               .fork(err => console.log(err),
                     x => console.log(x));


const launcMissiles = () => 
  new Task((rej, res) => {
    console.log('launc missiles!')
    res('missile')
  })

const app = launcMissiles().map(x => x + '!').map(x => x + ' lalala ');

app.fork(
  e => console.log('err', e),
  x => console.log('success', x)
);                    