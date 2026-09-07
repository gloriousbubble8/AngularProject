import { Component, signal } from '@angular/core';
import { TwoWayBindingComp } from './two-way-binding-comp/two-way-binding-comp';

@Component({
  selector: 'app-root',
  imports: [TwoWayBindingComp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('product-angular');
}
