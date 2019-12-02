import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObjectRestService {
  url: string;

  constructor(private httpClient: HttpClient) { 
    this.url = window['config']().API;
  }

  getYourObject() {
    return this.httpClient.get(`${this.url}/object`);
  }
}