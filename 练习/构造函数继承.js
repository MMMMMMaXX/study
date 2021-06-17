function Father(name) {
    this.name = name;
}
Father.height = 180;
Father.prototype.getName = function () {
    return this.name;
}
function Son(name) {
    Father.call(this,name);
}
var son = new Son('hhh');
console.log(son.name);
console.log(son.height);
// 缺点：并不能够继承父类原型上的方法和属性
// console.log(son.getName());