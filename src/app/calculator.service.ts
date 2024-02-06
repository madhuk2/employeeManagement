import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
 

  constructor(private http:HttpClient) { }

  add(a:number,b:number)
  {
    return a+b
  }
  difference(a:number,b:number)
  {
    return a-b
  }


  getUser():Observable<User>
  {
     return this.http.get<User>('https://jsonplaceholder.typicode.com/todos/1')
  }
  getUsers():Observable<User[]>
  {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/todos')
  }
  getUserById(userId: number):Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/todos/'+userId)
  }
  getEmpById(empId:number):Observable<Employee>
  {
    return this.http.get<Employee>('http://localhost:8080/employees/'+empId+'/Employee')
  }
  
  registerEmp(registrationForm:any):Observable<any>
  {
    return this.http.post<any>('http://localhost:8080/employees/addOrUpdate',registrationForm)
  }


}
