import Zebra from "./Zebra.js";
import Fish from "./Fish.js";
import Duck from "./Duck.js";
const z1 = new Zebra(5 , "male", true);
console.log(z1.ShowData());
console.log("does zebra Runs " + z1.run());
const f1 = new Fish(6, "Female", 4, true);
console.log(f1.ShowData());
console.log(" does the Fish Swims "+ f1.swim());
const d1 = new Duck(15,"male");
console.log(d1.ShowData());
console.log("Does the animal Quacks: "+d1.Quack());
console.log("Does the animal swims: "+ d1.swim());
