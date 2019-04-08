import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CounterComponent } from './counter.component';
import { CounterIncrementComponent } from './counter-increment/counter-increment.component';
import { CounterDecrementComponent } from './counter-decrement/counter-decrement.component';
import { CounterResetComponent } from './counter-reset/counter-reset.component';


@NgModule({
  declarations: [CounterComponent, CounterIncrementComponent,
    CounterDecrementComponent, CounterResetComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  entryComponents: [CounterComponent,
    CounterIncrementComponent,
    CounterDecrementComponent,
    CounterResetComponent]
})
export class CounterModule {

}
