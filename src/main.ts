import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { AngularComponentBasics } from './app/angular-component-basics/angular-component-basics';

@Component({
  selector: 'app-root',
  standalone: true,
  /* Interpolation */
  templateUrl: './app/app.html',
  imports: [AngularComponentBasics],
})
class App {
  personName: string = 'Nina';
  val: string = '';
}

bootstrapApplication(App);
