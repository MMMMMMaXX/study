
function Parent() {
  this.name = 'Richard';
}
function sayName() {
  console.log(this.name);
}

var p = new Parent();
sayName.call(p); 


//https://github.com/mqyqingfeng/Blog
