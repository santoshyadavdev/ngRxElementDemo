import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import {
  CounterComponent, CounterIncrementComponent,
  CounterDecrementComponent, CounterResetComponent
} from 'my-counter';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngRxElementDemo';

  constructor() {

  }
}
