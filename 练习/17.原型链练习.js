Function.prototype.a = 1
Object.prototype.b = 1
function Foo() {}
var t = new Foo()
t.a
t.b
console.log(t.a, t.b);