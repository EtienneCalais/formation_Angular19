import { Component } from '@angular/core';
import { Coktail } from 'app/shared/interfaces';

@Component({
  selector: 'app-coktail-details',
  imports: [],
  template: `
    <img class="mb-20" [src]="coktail.imageUrl" />
    <h3 class="mb-20">{{ coktail.name }}</h3>
    <p class="mb-20">{{ coktail.description }}</p>
    <div>
      <button class="btn btn-primary">Ajouter un coktail</button>
    </div>
  `,
  styles: `
  :host{
    display:flex;
    flex-direction:column
  }`,
})
export class CoktailDetailsComponent {
  coktail: Coktail = {
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0108/6167/4596/files/20240513082810-adobestock_292766769.webp?v=1715588893&width=600&height=900',
    name: 'Mojito',
    description: 'Ceci est un coktail',
  };
}
