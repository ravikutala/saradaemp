import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Route, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {

employee : Employee = new Employee();
constructor(private employeeService : EmployeeService, private route : Router){}

onSubmit(){
  this.insertEmployee();
}
insertEmployee(){
  this.employeeService.createEmployee(this.employee).subscribe(data => {
    this.goToEmployeeList();
  })

  }
goToEmployeeList(){
  this.route.navigate(['employees']);
}
}
