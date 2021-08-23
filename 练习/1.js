
function Parent() {
  this.name = 'Richard';
}
function sayName() {
  console.log(this.name);
}


var p = new Parent();
sayName.call(p);


var a = function () {
  this.b = 3;
}
var c = new a();
a.prototype.b = 9;
var b = 7;
a();
console.log(b);
console.log(c.b);

async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start');
setTimeout(function () {
  console.log('setTimeout');
}, 0)
async1();
new Promise(function (resolve) {
  console.log('promise1');
  resolve();
})
  .then(function () {
    console.log('promise2');
  })
console.log('script end');




//https://github.com/mqyqingfeng/Blog


