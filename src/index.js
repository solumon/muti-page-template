import A from './js/a';
import { add }  from './js/b';

console.log('hello webpack')

A.getPrice().then((price) => {
    console.log('price', price)
})

console.log(add(1000, 2))
