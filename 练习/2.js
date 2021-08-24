function Father() {
    this.name = 'hhh';
}
Father.prototype.getName = function () {
    console.log(this.name);
}
function Son() {
    Father.call(this);
}


Son.prototype = new Father();
Son.prototype.constructor = Son;

var son = new Son();
// console.log(son.name)


//笔试题
function a () {
    this.name = 'a';
    return { name: 'aReturn' }
}
a.name = 'b';
var b = new a();
console.log(b.name); 