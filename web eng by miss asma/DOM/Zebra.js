import Animal from "./Animal.js";
export default class Zebra extends Animal{
    constructor(Age,Gender,is_wild){
        super(Age,Gender);
        this.is_wild = is_wild;
    }
    run(){
        return true;
    }
    ShowData(){
        return super.ShowData()+ " is wild: "+ this.is_wild;
    }
}
