import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
//service is used for calling backend
export class EmployeeService {
  

  constructor(private http:HttpClient) { }
  registerEmp(registrationForm:any):Observable<any>
  {
    return this.http.post<any>('http://localhost:8080/employees/addOrUpdate',registrationForm)
  }
  login(loginForm:any):Observable<any>
  {
    return this.http.post<any>('http://localhost:8080/employees/login',loginForm)
    
  }
  getAllEmployee():Observable<any>
  {
     return this.http.get<any>('http://localhost:8080/employees')  
  }
  deleteEmployees(employeeId: number):Observable<any>
  {
    return this.http.delete<any>('http://localhost:8080/employees/delete/'+employeeId)
  }
  updateEmployees(employee: Employee):Observable<any>
   {
     return  this.http.post<any>('http://localhost:8080/employees/addOrUpdate',employee)
  }
  
 
  
}
