import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDecrementComponent } from './counter-decrement.component';

describe('CounterDecrementComponent', () => {
  let component: CounterDecrementComponent;
  let fixture: ComponentFixture<CounterDecrementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterDecrementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDecrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
