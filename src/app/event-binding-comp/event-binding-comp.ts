import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-event-binding-comp',
  styleUrl: './event-binding-comp.css',
  templateUrl: './event-binding-comp.html',
})
export class EventBindingComp {
  employeeName: string = 'John Doe';

  changeName(event: MouseEvent) {
    this.employeeName = 'Jane Smith';
    console.log(event);
  }
}
