import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-property-binding-comp',
  styleUrl: './property-binding-comp.css',
  templateUrl: './property-binding-comp.html',
})
export class PropertyBindingComp {
  productImageUrl: string =
    'https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp';
}
