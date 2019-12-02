import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Rule } from '../rule.model';

@Component({
  selector: 'app-rule-form',
  templateUrl: './rule-form.component.html',
  styleUrls: ['./rule-form.component.scss']
})
export class RuleFormComponent implements OnInit {
  @Input() rule: Rule;
  @Input() type: Type;
  @Output() refresh = new EventEmitter<any>();
  formRule = new FormGroup({
    id: new FormControl(),
    fieldName: new FormControl('type', [Validators.required]),
    oldContent: new FormControl(),
    newContent: new FormControl(),
    word: new FormControl()
  });

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    if (this.type === Type.UPDATE) {
      this.formRule.patchValue(this.rule);
    }
  }

  saveRule() {
    /**
     * @todo
     * if update to new fn and another else.
     * check from type.
     */
    console.log(this.formRule.value);
    this.activeModal.close();
    this.refresh.emit();
  }
}

export enum Type { NEW, UPDATE }