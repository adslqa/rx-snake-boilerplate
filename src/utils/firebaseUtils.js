import firebase from 'firebase';
import { ReplaySubject } from 'rxjs';
import gameSize from './gameSize';
import Point from './Point';

const firebaseConfig = {
  apiKey: 'AIzaSyB83-L7YE-Jwo_TOqnO9zBCOTDFZRIe3s0',
  authDomain: 'react-rx-snake.firebaseapp.com',
  databaseURL: 'https://react-rx-snake.firebaseio.com',
  projectId: 'react-rx-snake',
  storageBucket: 'react-rx-snake.appspot.com',
  messagingSenderId: '682127798221',
};
firebase.initializeApp(firebaseConfig);

firebase.auth().signInAnonymously().catch(console.error);

const candyRef = firebase.database().ref('meetup/candy');
export const candy$ = new ReplaySubject(1);
candyRef.on('value', x => candy$.next(x.val()));

const playersRef = firebase.database().ref('meetup/players');
const snakeRef = playersRef.push();
snakeRef.onDisconnect().remove();

export const players$ = new ReplaySubject(1);
playersRef.on('value', (x) => {
  if (!x.exists()) {
    players$.next([]);
    return;
  }

  const players = Object.entries(x.val())
    .filter(([key]) => key !== snakeRef.key)
    .reduce((acc, [_, value]) => ([...acc, JSON.parse(value)]), []);
  players$.next(players);
});

export function onSnakeMove(snake) {
  snakeRef.set(JSON.stringify(snake));
}

function pick(props, obj) {
  return props.reduce((acc, prop) => ({ ...acc, [prop]: obj[prop] }), {});
}

export function onSnakeEat() {
  candyRef.set(pick(['x', 'y'], Point.random(gameSize)));
}

export function onSnakeDied() {
  snakeRef.remove();
}
