import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnDebitComponent } from './return-debit.component';

describe('ReturnDebitComponent', () => {
  let component: ReturnDebitComponent;
  let fixture: ComponentFixture<ReturnDebitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnDebitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
