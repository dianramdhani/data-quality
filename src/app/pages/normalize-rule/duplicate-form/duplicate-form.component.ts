import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-duplicate-form',
  templateUrl: './duplicate-form.component.html',
  styleUrls: ['./duplicate-form.component.scss']
})
export class DuplicateFormComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
}