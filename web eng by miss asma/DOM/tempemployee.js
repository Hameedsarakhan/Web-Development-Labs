import Employee from "./employee.js";
export default class PartTimeEEmployee extends Employee{
    constructor(Name, Empno, Address, Salary, Designation, WorkHours){
        super(Name,Empno,Address,Salary,Designation);
        this.WorkHours=WorkHours;
    }
    ShowData(){
        return super.ShowData() + " WorkHours: "+ this.WorkHours;
    }
}

