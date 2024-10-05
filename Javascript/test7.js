class Employee
{
    id=1001;
    ename="vinay kumar";
    displayInfo()
    {
        console.log(this.id+" "+this.ename);
    }
}
let emp=new Employee();
emp.displayInfo();