import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnDebitComponent } from './return-debit.component';
import { PageModule } from '../page.module';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('ReturnDebitComponent', () => {
  let component: ReturnDebitComponent;
  let fixture: ComponentFixture<ReturnDebitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnDebitComponent ],
      providers: [ HttpHandler, HttpClient ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
