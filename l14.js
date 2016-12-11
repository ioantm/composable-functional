const Task = require('data.task');

const Db = ({
  find: id => 
    new Task((rej, res) => 
      setTimeout(() => res({ id: id, title: `Project ${id}`}), 100))
})

// mode 1 serial

Db.find(1)
  .chain(p1 => Db.find(2).map(p1 =>
    () => console.log('p2 ready')))
    .fork(() => console.log('err'), () => console.log('success'));

// mode 2 parallel
Task.of(p1 => p2 => console.log('user both in paralel: ', p1, p2))
.ap(Db.find(20))
.ap(Db.find(30))
.fork(
  err => console.log('task error'),
  res => console.log('task success ')
)

