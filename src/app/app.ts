import { Component, signal } from '@angular/core';
import { StringInterpolationComp } from './string-interpolation-comp/string-interpolation-comp';

@Component({
  selector: 'app-root',
  imports: [StringInterpolationComp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('product-angular');
}
