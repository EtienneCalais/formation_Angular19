import { Component } from '@angular/core';
import { CoktailDetailsComponent } from './components/coktail-details.component';
import { CoktailsListComponent } from './components/coktails-list.component';
@Component({
  selector: 'app-coktails',
  imports: [CoktailsListComponent, CoktailDetailsComponent],
  template: ` <app-coktails-list class="w-half card"></app-coktails-list>
    <app-coktail-details class="w-half card"></app-coktail-details>`,
  styles: `
    :host{
      display:flex;
      gap:24px;
      padding:24px;
    }
  `,
})
export class CoktailsComponent {}
