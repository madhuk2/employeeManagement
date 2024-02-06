import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from '../calculator.service';
import { User } from '../user';
import { HttpClientModule } from '@angular/common/http';
import { Employee } from '../employee';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css', 
  providers:[CalculatorService]
})
export class CalculatorComponent implements OnInit{
     a:number=0
     b:number=0
     result:number=0
     userId:number=0
     user:User=new User()
     users:User[]=[]
     empId:number=0
     employee:Employee=new Employee()
      constructor(private service:CalculatorService)
      {

      }
  ngOnInit(): void {

      // this.service.getUser()
      // .subscribe(user=>{
      //   this.user=user
      // })

      this.service.getUsers()
      .subscribe(data=>{
        this.users=data
      })

  }
      

      add()
     {
       this.result=this.service.add(this.a,this.b)
       return this.result
     }
     difference()
     {
       this.result=this.service.difference(this.a,this.b)
       return this.result
     }
     
     getUserById()
     {
      this.service.getUserById(this.userId)
      .subscribe(data=>{
        this.user=data
      })
    

     }
     getEmpById()
     {
      this.service.getEmpById(this.empId)
      .subscribe(data=>{
        this.employee=data 
        
      })
     }
}
