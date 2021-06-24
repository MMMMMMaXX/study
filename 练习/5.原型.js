Function.prototype.a = () => {
    console.log(1);
}
Object.prototype.b = () => {
    console.log(2);
}
function A() {}
var a = new A();

Object.__proto__.a();
Object.__proto__.b();
A.a();
A.b();