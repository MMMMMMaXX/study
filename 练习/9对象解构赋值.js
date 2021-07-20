class A {
    constructor(name) {
        this.name = name;
    }
}
var a1 = new A();
var a2 = new A();
a1.name = 'mx';
a2.age = 18;
a2 = {...a2,...a1,name:1};
console.log(a2.age,a2.name);