import { Component, OnInit } from '@angular/core';
import { Rule } from './rule.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-normalize-rule-v2',
  templateUrl: './normalize-rule-v2.component.html',
  styleUrls: ['./normalize-rule-v2.component.scss']
})
export class NormalizeRuleV2Component implements OnInit {
  rules: Rule[];
  duplicate: boolean;

  constructor(private httpClient: HttpClient) {
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
}