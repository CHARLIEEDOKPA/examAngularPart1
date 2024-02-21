import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent {


  formEmployee: FormGroup
  inputsOk = false
  examService = inject(ExamService)

  constructor() {
    
    let NUMBER_PATTERN = "[0-9]?[0-9]"
    let DECIMAL_PATTERN = "[0-9]*?.[0-9]*"
    let STRING_PATTERN = "[a-zA-Z]*"

    this.formEmployee =  new FormGroup({
      name: new FormControl('',[Validators.required, Validators.pattern(STRING_PATTERN)]),
      age: new FormControl('',[Validators.required, Validators.pattern(NUMBER_PATTERN)]),
      position: new FormControl('',[Validators.required, Validators.pattern(STRING_PATTERN)]),
      salary: new FormControl('',[Validators.required,Validators.pattern(DECIMAL_PATTERN)]),
      commission: new FormControl('',[Validators.required, Validators.pattern(DECIMAL_PATTERN)]),
    })
  }

  addEmployee() {
    this.examService.addEmployee(this.returnFixedEmployee(this.formEmployee.value))
    this.formEmployee.reset()
  }

  //I add this private function to fix the number values of the fields
  private returnFixedEmployee(employee:any):Employee{
    
    employee.age = Number(employee.age)
    employee.salary = Number(employee.salary)
    employee.commission = Number(employee.commission)
    

    return employee
    
  }


}
