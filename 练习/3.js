var arr = [5, 5, 6, 2, 1, 3];
var result = arr.reduce((pre, value, index) => {
    return pre + value;
}, 0)
console.log(result);


function P() {
    this.a = [];
}
P.prototype.b = [];
let child1 = new P();
child1.a.push(1);
child1.b.push(2);
console.log(child1.a);
console.log(child1.b);

let child2 = new P();
console.log(child2.a);
console.log(child2.b);