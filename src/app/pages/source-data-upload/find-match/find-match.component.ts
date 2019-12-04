import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { DataMatch } from './data-match.model';

@Component({
  selector: 'app-find-match',
  templateUrl: './find-match.component.html',
  styleUrls: ['./find-match.component.scss']
})
export class FindMatchComponent implements OnInit {
  dataMatch: DataMatch[];

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.dataMatch = await this.http.get<any>('./assets/test/match.test.json')
      .pipe(
        map(res => {
          return JSON.parse(res.solrMatcher).map(data => {
            return new DataMatch(
              data.id,
              data.score,
              data.name || '',
              data.npwp || '',
              data.nik || ''
            );
          })
        })
      )
      .toPromise();
  }
}