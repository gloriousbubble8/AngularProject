import { Component, signal } from '@angular/core';
import { EventBindingComp } from './event-binding-comp/event-binding-comp';

@Component({
  selector: 'app-root',
  imports: [EventBindingComp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('product-angular');
}
