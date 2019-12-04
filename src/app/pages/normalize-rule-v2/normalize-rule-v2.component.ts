import { Component, OnInit } from '@angular/core';
import { Rule } from './rule.model';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DuplicateFormComponent } from './duplicate-form/duplicate-form.component';
import { RuleFormComponent, Type } from './rule-form/rule-form.component';

@Component({
  selector: 'app-normalize-rule-v2',
  templateUrl: './normalize-rule-v2.component.html',
  styleUrls: ['./normalize-rule-v2.component.scss']
})
export class NormalizeRuleV2Component implements OnInit {
  type = Type;
  rules: Rule[];
  duplicate: boolean;

  constructor(private httpClient: HttpClient, private modal: NgbModal) {
    this.duplicate = false;
  }

  async ngOnInit() {
    this.rules = await this.httpClient.get<Rule[]>('./assets/test/rules.test.json').toPromise();
    console.log(this.rules);
  }

  showDuplicate() {
    this.duplicate = true;
  }

  hideDuplicate() {
    this.duplicate = false;
  }

  showDuplicateForm() {
    const modalRef = this.modal.open(DuplicateFormComponent);
  }

  showRuleForm(type: Type, rule?: Rule) {
    const modalRef = this.modal.open(RuleFormComponent);
    Object.assign(modalRef.componentInstance, { type, rule });
    modalRef.componentInstance.refresh.subscribe(() => {
      console.log('ini refresh table');
    });
  }
}