import { Component } from '@angular/core';

@Component({
  selector: 'app-coktails-list',
  imports: [],
  template: `
    <h2 class="mb-20">Liste des coktails</h2>
    <ul class="mb-20">
      <li class="active-item text-primary px-12 py-6">
        <div>
          <h3>Mojito</h3>
        </div>
      </li>
      <li class="px-12 py-6">
        <div>
          <h3>Mojito</h3>
        </div>
      </li>
      <li class="px-12 py-6">
        <div>
          <h3>Mojito</h3>
        </div>
      </li>
    </ul>
    <button class="btn btn-primary">Ajouter un coktail</button>
  `,
  styles: `
  :host{
   
  }
  `,
})
export class CoktailsListComponent {}
