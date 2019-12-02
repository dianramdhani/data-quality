import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-object-form',
  templateUrl: './object-form.component.html',
  styleUrls: ['./object-form.component.scss']
})
export class ObjectFormComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  saveObject() { }
}