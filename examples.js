const { Observable } = require('rxjs');
let example;
let arr;


// map
arr = [1, 2, 3].map(x => 10 * x);
example = Observable.of(1, 2, 3).map(x => 10 * x);



// filter
// arr = [0, 1, 2, 3, 4].filter(x => x % 2 === 1);
// example = Observable.of(0, 1, 2, 3, 4).filter(x => x % 2 === 1);



// scan
// example = Observable.of(1, 2, 3).scan((sum, item) => sum + item, 0);



// startWith
// example = Observable.of(1, 2, 3).startWith(0);



// interval + take
// example = Observable.interval(1000).take(4);



// withLatestFrom
// let obs3 = Observable.interval(400).take(3);
// example = Observable.interval(250).withLatestFrom(obs3, (x, y) => [x, y]).take(6);



// takeWhile
// example = Observable.of(2, 3, 4, 5, 6).takeWhile(x => x < 4);



























arr && console.log(arr);
example && example.subscribe(console.log, console.error, () => console.log('complete'));
