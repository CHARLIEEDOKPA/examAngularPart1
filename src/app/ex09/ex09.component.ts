import { ExamService } from './../exam.service';
import { Component, inject } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEE_LIST } from '../employee-list';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-ex09',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './ex09.component.html',
})
export class Ex09Component {
  private employees: Employee[] = [];
  employeesWithOrderCriteria!: Employee[];
  private examService = inject(ExamService)

  constructor() {}

  sort(prop:keyof Employee) {
    this.employeesWithOrderCriteria = this.employees.sort((a,b) => {
      let aValue = a[prop]
      let bValue = b[prop]

      if(typeof aValue == "number" && typeof bValue === "number"){
        return bValue - aValue;
      } else {
        let aString = String(aValue)
        let bString = String(bValue)
        return aString.localeCompare(bString)
      }


    })
  }


  ngOnInit(): void {
    this.employees = this.examService.getEmployees()
    this.employeesWithOrderCriteria = this.employees;
    console.log(EMPLOYEE_LIST);
  }


}
