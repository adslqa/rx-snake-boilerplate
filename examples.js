const { Observable } = require('rxjs');
let example;


// forEach / subscribe
[1, 2, 3].forEach(x => console.log(x));
Observable.of(1, 2, 3).subscribe(x => console.log(x), e => console.error(e), () => console.log('complete'));



// map
// let arr = [1, 2, 3].map(x => 10 * x);
// console.log(arr);
// example = Observable.of(1, 2, 3).map(x => 10 * x);



// filter
// let arr = [0, 1, 2, 3, 4].filter(x => x % 2 === 1);
// console.log(arr);
// example = Observable.of(0, 1, 2, 3, 4).filter(x => x % 2 === 1);



// interval + take
// example = Observable.interval(1000).take(4);



// withLatestFrom
// let obs3 = Observable.interval(400).take(3);
// example = Observable.interval(250).withLatestFrom(obs3, (x, y) => [x, y]).take(6);



// scan
// example = Observable.of(1, 2, 3).scan((sum, item) => sum + item, 0);



// takeWhile
// example = Observable.of(2, 3, 4, 5, 6).takeWhile(x => x < 4);



// startWith
// example = Observable.of(1, 2, 3).startWith(0);



// merge
// let obs1 = Observable.interval(300).map(x => [1, x]);
// let obs2 = Observable.interval(400).map(x => [2, x]);
// example = Observable.merge(obs1, obs2).take(10);



// mergeMap = map + merge
// example = Observable.range(0, 3)
//   .mergeMap(x => Observable.interval(Math.random() * 200 + 100).map(y => [x, y]))
//   .take(10);



// exhaust
// example = Observable.interval(40)
//   .map(x => Observable.interval(15).map(y => [x, y]).take(Math.round(Math.random() * 5)))
//   .exhaust()
//   .take(10);



// exhaustMap = map + exhaust
// example = Observable.interval(40)
//   .exhaustMap(x => Observable.interval(15).map(y => [x, y]).take(Math.round(Math.random() * 5)))
//   .take(10);

























example && example.subscribe(x => console.log(x), e => console.error(e), () => console.log('complete'));
