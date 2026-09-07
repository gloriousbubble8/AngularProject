import { Component, signal } from '@angular/core';
import { PropertyBindingComp } from './property-binding-comp/property-binding-comp';

@Component({
  selector: 'app-root',
  imports: [PropertyBindingComp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('product-angular');
}
