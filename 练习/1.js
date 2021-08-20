
function Parent() {
  this.name = 'Richard';
}
function sayName() {
  console.log(this.name);
}


var p = new Parent();
sayName.call(p); 

var name = '1';
function a() {
  let name = '2';
  function b () {
    console.log(name);
    console.log(this.name);
  }
}
var c = a();
c.b();




//https://github.com/mqyqingfeng/Blog


