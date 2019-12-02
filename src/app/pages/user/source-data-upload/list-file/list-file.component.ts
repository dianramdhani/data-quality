import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { File } from './file.model';

@Component({
  selector: 'app-list-file',
  templateUrl: './list-file.component.html',
  styleUrls: ['./list-file.component.scss']
})
export class ListFileComponent implements OnInit {
  files: File[];

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.files = await this.http.get<File[]>('./assets/test/files.test.json')
      .pipe(map(res => {
        return res.map(file => {
          return new File(
            file.id,
            file.location,
            file.filename,
            file.uploadDate,
            file.filesize,
            file.status
          );
        });
      }))
      .toPromise();
  }
}