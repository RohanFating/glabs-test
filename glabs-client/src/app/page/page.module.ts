import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnDebitComponent } from './return-debit/return-debit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [ ReturnDebitComponent ],
  declarations: [ ReturnDebitComponent ]
})
export class PageModule { }
