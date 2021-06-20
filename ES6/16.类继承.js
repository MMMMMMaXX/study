class Car{
    constructor(brand){
        this.brand = brand;
    }
    show(){
        console.log(`本车的品牌的是${this.brand}`);
    }
}
class Lexus extends Car{
    constructor(brand,lineup){
        // super调用父类
        super(brand);
        this.lineup = lineup;
    }
    getPrice(){
        switch(this.lineup){
            case "RX":
                return 60;
            case "NX":
                return 40;
            default:
                throw new Error("未知车的类别");
        }
    }
}

let mycar = new Lexus("Lexus","RX");
mycar.show();
console.log(`价格是：${mycar.getPrice()}万`);
console.log("价格是：",mycar.getPrice(),"万");