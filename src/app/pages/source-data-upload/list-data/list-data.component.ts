import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Data } from './data.model';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss']
})
export class ListDataComponent implements OnInit {
  data: Data[];

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.data = await this.http.get<Data[]>('./assets/test/data.test.json')
      .pipe(
        map(res => {
          return res.map(data => {
            return new Data(
              data.id,
              data['Full Name'],
              data['Full Address'],
              data['Date of Birth'],
              data['Place of Birth'],
              data['NPWP'],
              data.additionalInfo,
              data.fileId,
              data.lastModifiedDate,
              data.status
            );
          });
        })
      )
      .toPromise();
  }

}
