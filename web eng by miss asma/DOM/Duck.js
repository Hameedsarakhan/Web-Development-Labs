import Animal from "./Animal.js";
export default class Duck extends Animal{
    constructor(Age,Gender){
        super(Age,Gender);
        this.beakColor= "yellow";
    }
    swim(){
        return true;
    }
    Quack(){
        return true;
    }
    ShowData(){
        return super.ShowData()+ " beakColor: "+ this.beakColor;
    }
}
