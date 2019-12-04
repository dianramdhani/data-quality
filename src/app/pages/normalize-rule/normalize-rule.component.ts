import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Rule } from './rule.model';

import { RuleFormComponent, Type } from './rule-form/rule-form.component';

@Component({
  selector: 'app-normalize-rule',
  templateUrl: './normalize-rule.component.html',
  styleUrls: ['./normalize-rule.component.scss']
})
export class NormalizeRuleComponent implements OnInit {
  rules: Rule[];
  type = Type;

  constructor(private http: HttpClient, private modal: NgbModal) { }

  async ngOnInit() {
    this.rules = await this.http.get<Rule[]>('./assets/test/rules.test.json').toPromise();
  }

  openRuleForm(type: Type, rule?: Rule) {
    const modalRef = this.modal.open(RuleFormComponent);
    Object.assign(modalRef.componentInstance, { type, rule });
    modalRef.componentInstance.refresh.subscribe(() => {
      console.log('ini refresh table');
    });
  }
}