import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployeeList() {
    throw new Error('Method not implemented.');
  }
private baseURL = "http://localhost:8080/employees";
  constructor(private httpClient : HttpClient) { }
  getEmployeesList():Observable<Employee[]>{
    return this['httpClient'].get<Employee[]>(`${this.baseURL}`);
  }
  createEmployee(employee :Employee) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,employee);
  }
  getEmployeeById(empId:number):Observable<Employee>{
   return this.httpClient.get<Employee>(`${this.baseURL}/${empId}`);
  }
  updateEmployee(empId:number,employee:Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.baseURL}/${empId}`,employee);
  }
  deleteEmployeeById(empId:number) :Observable<Object>{
    return this.httpClient.delete<Employee>(`${this.baseURL}/${empId}`);
  }
}
