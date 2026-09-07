import { Component, signal } from '@angular/core';
import { ComponentBasics } from './component-basics/component-basics';

@Component({
  selector: 'app-root',
  imports: [ComponentBasics],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('product-angular');
}
