class Player{
    constructor(name,gender){
        this.name = name;
        this.gender = gender;
    }
    show(){
        console.log(`${this.name}的性别是：${this.gender}`);
    }
    // 静态方法，无需实例化也可以使用类名.方法名()进行调用
    // 只能被类调用 不能被实例调用
    static info(){
        console.log("这是一个球员类，您可以使用它建立自己的球员。");
    }
}

let player = new Player("库里","男");
console.log(player.name,player.gender);
player.show();

Player.info();