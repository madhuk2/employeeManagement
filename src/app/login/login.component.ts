import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,HttpClientModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  //whenever service is used in a component then we need to add providers
  providers:[EmployeeService]
})
export class LoginComponent {
  //this is the name given to the form to access the form 
  loginForm:any
  //the parameter service  in the constructor makes object of the service class being used
   //and the formBuilder parameter makes object of the formBuilder
  constructor(private formBuilder:FormBuilder,private service:EmployeeService,
    private router:Router)
  {
       this.loginForm=this.formBuilder.group({
        email:['abc'],
        phoneNo:['28900']
       })
  }
  //after clicking the button login the work being done in the backend is done by this method
  login()
  {
    //this.login.value converts all the data of the html form to json and sends to backend
    this.service.login(this.loginForm.value)
    //to fetch the data coming from http request we use subscribe
    .subscribe(data=>{
       alert('login successful')
       this.router.navigate(["/dashboard"])
    }
      

      
      )
  }

     
}
