import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: 
      `
        <h1>Hello, {{personName}}</h1>
        <button (click)="onButtonClick()">Click Here</button>
      `
})
class App {
  personName: string = "Nina";

  onButtonClick() {
    this.personName = "Giridhar";
  }
}

bootstrapApplication(App);