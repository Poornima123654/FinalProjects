import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

employees : Employee[]=[];

constructor(private employeeservice:EmployeeService, private router:Router){}

ngOnInit():void
{
  this.getEmployees();
}

 getEmployees()
{
    this.employeeservice.getEmployeeList().subscribe(data=>{
      this.employees = data;
    });
}
employeeDetails(id:number)
{
  this.router.navigate(['/employee-details',id]);
}

updateEmployee(id: number)
{
    this.router.navigate(['/update-employee',id]);
}
deleteEmployee(id:number)
{
   this.employeeservice.deletEmployee(id).subscribe(data=>{
    console.log(data);
    this.getEmployees();
   })
}


}
