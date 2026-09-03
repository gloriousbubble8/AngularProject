import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  /* Interpolation */
  template: `
    <h1>Hello {{ personName + (1 + 2) }}</h1>
    // Interpolation with expression
    <p>Upper cased Person Name: {{ personName.toUpperCase() }}</p>
  `,
})
class App {
  personName: string = 'Nina';
}

bootstrapApplication(App);
