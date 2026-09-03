import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  /* Interpolation */
  template: `<h1>Hello {{ personName }}</h1>`,
})
class App {
  personName: string = 'Nina';

  onButtonClick() {
    this.personName = 'Giridhar';
  }
}

bootstrapApplication(App);
