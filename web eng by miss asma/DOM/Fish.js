import Animal from "./Animal.js";
export default class Fish extends Animal{
   constructor(Age,Gender,SizeInFt, canEat){
      super(Age,Gender);
      this.SizeInFt= SizeInFt;
      this.canEat= canEat;
   }
   swim(){
      return true;
   }
   ShowData(){
      return super.ShowData()+ " Size In ft: "+ this.SizeInFt+ " Can Eat: "+ this.canEat; 
   }
}
