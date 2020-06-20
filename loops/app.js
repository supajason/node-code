//creating loops in node.js

let i;
//for loops inline ++
for (i = 0; i < 5; i++) {
    console.log(`Hello world ${i}`);
}
// ++ inside block
for (i = 0; i < 5;) {
    console.log(`Hello again ${i}`);
    i++
}
//for loops
let x = [1,2,3,4,5];
//foreach using the array
x.forEach(nu => {
    console.log(`Hey ${nu}`);    
});
//for in nu = 0,1,2.. (nu is the index)
for (num in x) {
    console.log(`Ello ${x[num]}`);
}
//for of num is 1,2,3..
for (num of x) {
    console.log(`G'Day ${num}`);
}