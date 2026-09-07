import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-two-way-binding-comp',
  styleUrl: './two-way-binding-comp.css',
  templateUrl: './two-way-binding-comp.html',
})
export class TwoWayBindingComp {
  value: string = 'Your Name';

  checkTheValue() {
    console.log(`The value after two way binding is: ${this.value}`);
  }
}
