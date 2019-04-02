import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngRxElementDemo';

  constructor(injector: Injector) {
    // Convert `PopupComponent` to a custom element.
    const CounterElement = createCustomElement(CounterComponent, { injector });
    // Register the custom element with the browser.
    customElements.define('counter-element', CounterElement);
  }
}
