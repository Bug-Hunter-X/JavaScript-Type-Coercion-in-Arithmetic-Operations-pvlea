function foo(a,b){return a + Number(b);}
console.log(foo(1, "2")); // Output: 3

function bar(a,b){return a - Number(b);}
console.log(bar(1,"2")); //Output: -1

function baz(a,b){return a * Number(b);}
console.log(baz(1,"2")); //Output: 2

function bam(a,b){return a / Number(b);}
console.log(bam(1,"2")); //Output: 0.5