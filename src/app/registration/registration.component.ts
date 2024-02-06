import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { CalculatorService } from '../calculator.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
  providers:[EmployeeService,CalculatorService]
})
export class RegistrationComponent implements OnInit{
  registrationForm: any                                                    
  constructor(private formBuilder:FormBuilder,private service:EmployeeService,private router:Router)
  {
    
     //to use this router class in  this class we write private router:Router
                                   // here router is an object of the Router class
   

  }
  ngOnInit(): void {
    
    this.registrationForm=this.formBuilder.group({
      empName:['Madhu'],
    
      phoneNo:['98766'],
       address:[''],
        exp:[''],
       role:[''],
        email:[''],
        image:['']
    })
  }
  register()
  {
    //for showing the data going to the backend  in the console of the web page
      console.log(this.registrationForm.value)
      this.service.registerEmp(this.registrationForm.value)
      .subscribe(data=>{
      alert('registration successful')
      this.router.navigate(["/login"])
      //the page to be navigated on hitting this very method
      })

  }



}
