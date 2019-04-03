import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterResetComponent } from './counter-reset.component';

describe('CounterResetComponent', () => {
  let component: CounterResetComponent;
  let fixture: ComponentFixture<CounterResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
