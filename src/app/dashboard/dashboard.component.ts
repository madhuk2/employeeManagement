import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  //these two must be added whenever a new component is made
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  //whenever any service is to be used then it must be added in the providers
  providers:[EmployeeService]
})
export class DashboardComponent {
   employees:Employee[]=[]
   deleteEmployee:Employee
   editEmployee:Employee
  constructor(private service:EmployeeService)
  {
    this.getAllData()
       
  }
  getAllData()
  {
    this.service.getAllEmployee()
    .subscribe(data=>{
      this.employees=data
      //for showing the data on the console 
      // console.log(this.employees);
      
    })
  }
  public onAddEmloyee(addForm : NgForm): void {
    document.getElementById('add-employee-form').click();
    // this.employeeService.addEmployees(addForm.value).subscribe(
    //   (response : Employee) =>{
    //     console.log(response);
    //     this.getEmployees();
    //     addForm.reset();
    //   },
    //   (error : HttpErrorResponse) =>{
    //     alert(error.message);
    //   }
    // );
  }

  public onUpdateEmloyee(employee : Employee): void {
    document.getElementById('add-employee-form').click();
    console.log(employee)
    this.service.updateEmployees(employee).subscribe(
      (response : Employee) =>{
        console.log(response);
        this.getAllData();
      },
      (error : HttpErrorResponse) =>{
        alert(error.message);
      }
    );

  }

  public onDeleteEmloyee(employeeId : number): void {
    this.service.deleteEmployees(employeeId).subscribe(
      (response : void) => {
        console.log(response);
        this.getAllData();
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }
  

  public searchEmployees(key : string): void {
    const results : Employee[] = [];
    for(const employee of this.employees) {
      if(employee.empName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||employee.phoneNo.toString().toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||employee.role.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.employees = results;
    if(results.length === 0 || !key) {
      this.getAllData();
    }
  }
  //the pop at the frontend is called modal

  
  public onOpenModal(employee : Employee, mode : string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if(mode === 'edit') {
      this.editEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if(mode === 'delete') {
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
      //the modal is being called after we chose delete
    }
    container.appendChild(button);
    button.click();
    
  }



}
