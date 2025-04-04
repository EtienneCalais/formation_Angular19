import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { CoktailsComponent } from './components/coktails/coktails.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, CoktailsComponent],
  template: ` <app-header />
    <app-coktails class="flex-auto"></app-coktails>
    <app-footer></app-footer>`,
  styles: `
    :host{
      min-height:100vh;
      display:flex;
      flex-direction:column;
    }`,
})
export class AppComponent {}
