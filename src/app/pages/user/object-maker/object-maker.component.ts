import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ObjectMaker } from './object-maker.model';

import { ObjectRestService } from 'src/app/services';

import { ObjectFormComponent } from './object-form/object-form.component';

@Component({
  selector: 'app-object-maker',
  templateUrl: './object-maker.component.html',
  styleUrls: ['./object-maker.component.scss']
})
export class ObjectMakerComponent implements OnInit {
  data: ObjectMaker[];

  constructor(private httpClient: HttpClient, private modal: NgbModal, private objectRest: ObjectRestService) { }

  async ngOnInit() {
    this.data = await this.httpClient.get<ObjectMaker[]>('./assets/test/object.test.json').toPromise();
    console.log(this.data);
    const test = await this.objectRest.getYourObject().toPromise();
  }

  openObjectForm() {
    const modalRef = this.modal.open(ObjectFormComponent);
  }
}