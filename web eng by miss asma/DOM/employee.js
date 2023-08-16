export default class Employee{
    constructor(Name, Empno, Address, Salary, Designation){
       this.Name= Name;
       this.Empno= Empno;
       this.Address=Address;
       this.Salary= Salary;
       this.Designation= Designation;
    }
    ShowData(){
       return "Employee Details Are as follows "  +" Name: "+ this.Name+ " Empno: "+ this.Empno+ " Address: "+ this.Address+ " Salary: "+ this.Salary+ " Designation: "+ this.Designation;
    }
  }
 