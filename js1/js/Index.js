//1
let a = ['lorem', 123, true, 'ipsum'];

console.log(a.length);

//2
console.log(a[0]);

console.log(a[a.length - 1]);

//3
let em = [453, 'lorem', 'css', true, 18];

//4
em.unshift(156,656,509,);

//5
em.shift()
em.pop()
em.pop()

console.log(em);

//6
let number = [1,3,5,7,9];
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }

//7
em.splice(1, 2)

console.log(em);
console.log(em.splice(1, 2));