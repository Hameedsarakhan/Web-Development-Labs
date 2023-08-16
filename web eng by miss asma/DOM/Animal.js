export default class Animal{
    constructor(Age,Gender){
       this.Age=Age;
       this.Gender=Gender;
    }
    isMammal(){
       return "Animal is Mammal";
    }
    mate(){
       return "Zoo Animals ";
    }
    ShowData(){
       return "Animal Details: "+ " Age: "+ this.Age+ " Gender: "+ this.Gender ;
    }
  }
 