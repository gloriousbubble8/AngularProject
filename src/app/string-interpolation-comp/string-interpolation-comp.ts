import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-string-interpolation-comp',
  styleUrl: './string-interpolation-comp.css',
  templateUrl: './string-interpolation-comp.html',
})
export class StringInterpolationComp {
  employeeId: number = 101;
  employeeName: string = 'John Doe';
  employeeAge: number = 30;
  employeeSalary: number = 50000;
}
