import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CounterComponent } from './counter/counter.component';
import { CounterIncrementComponent } from './counter/counter-increment/counter-increment.component';
import { CounterDecrementComponent } from './counter/counter-decrement/counter-decrement.component';
import { CounterResetComponent } from './counter/counter-reset/counter-reset.component';

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

    const CounterIncrementElement = createCustomElement(CounterIncrementComponent, { injector });
    customElements.define('counter-increment', CounterIncrementElement);
    const CounterDecrementElement = createCustomElement(CounterDecrementComponent, { injector });
    customElements.define('counter-decrement', CounterDecrementElement);
    const CounterResetElement = createCustomElement(CounterResetComponent, { injector });
    customElements.define('counter-reset', CounterResetElement);
  }
}
