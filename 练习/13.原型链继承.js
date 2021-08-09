function Father(name) {
    this.name = name;
}
Father.prototype.getName = function () {
    return this.name;
}
Father.height = 180;
function Son() {

}
Son.prototype = new Father('hhh');
Son.prototype.constructor = Son;
var son = new Son('hhh');
console.log(son.name);
console.log(son.height);
console.log(son.getName());
