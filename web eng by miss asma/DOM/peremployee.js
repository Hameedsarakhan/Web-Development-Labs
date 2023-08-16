import Employee from "./employee.js";
export default class PermenantEmployee extends Employee{
   constructor(Name, Empno, Address, Salary, Designation, WorkDuration){
      super(Name,Empno,Address,Salary,Designation);
      this.WorkDuration=WorkDuration;
   }
   ShowData(){
      return super.ShowData()+ " Work Duration: "+ this.WorkDuration;
   }
}

