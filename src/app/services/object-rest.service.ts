import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AlertComponent } from '../core/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class ObjectRestService {
  url: string;

  constructor(private httpClient: HttpClient, private modal: NgbModal) {
    this.url = window['config']().API;
  }

  getYourObject() {
    return this.httpClient.get(`${this.url}/object`)
      .pipe(
        catchError(({ error }) => {
          const modalRef = this.modal.open(AlertComponent),
            title = 'Error',
            message = error.message;
          Object.assign(modalRef.componentInstance, { title, message });
          return throwError(error.message);
        }),
      );
  }
}