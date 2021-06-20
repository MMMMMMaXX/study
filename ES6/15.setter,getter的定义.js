class Player{
    constructor(name,gender){
        this.name = name;
        this.gender = gender;
    }
    get age(){
        return this._age;
    }
    set age(val){
        this._age = val;
    }
}
let player = new Player("库里","男");
console.log(player);
// 调用set
player.age = 28;
console.log(player);
// 调用get
console.log(player.age);