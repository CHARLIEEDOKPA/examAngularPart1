import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEE_LIST } from './employee-list';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  private employees: Employee[];

  constructor() {
    this.employees = EMPLOYEE_LIST;
  }

  getEmployees() {
    return this.employees;
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }
}
