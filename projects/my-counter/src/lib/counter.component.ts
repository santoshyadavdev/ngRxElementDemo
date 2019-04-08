import { Component, OnInit, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterIncrementComponent } from './counter-increment/counter-increment.component';
import { CounterDecrementComponent } from './counter-decrement/counter-decrement.component';
import { CounterResetComponent } from './counter-reset/counter-reset.component';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {


  }

  ngOnInit() {
    this.count$ = this.store.pipe(select('count'));
  }




}
