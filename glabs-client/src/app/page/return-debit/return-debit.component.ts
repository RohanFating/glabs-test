import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReturnDebit } from '../../interfaces/return-debit.interface';

const API_URL = 'http://192.168.1.3:3001/';

/**
 * ReturnDebitComponent:: Component renders return debit items
 */
@Component({
  selector: 'app-return-debit',
  templateUrl: './return-debit.component.html',
  styleUrls: ['./return-debit.component.scss']
})
export class ReturnDebitComponent implements OnInit {

  public returnDebitItems: Array<ReturnDebit>;

  constructor( private http: HttpClient ) {
  }

  /**
   * Lifecycle Hook ngOnInit
   */
  public ngOnInit(): void {
    this.http.get(`${API_URL}glabs/getGlabsData`).subscribe(( response: Array<ReturnDebit> ) => {
      this.returnDebitItems = response;
    },
      (err) => {
        this.returnDebitItems = [];
        console.log('Server Error');
      });
  }

}
