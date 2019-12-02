import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {
  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = window['config']().API;
  }

  getUsers() {
    return this.httpClient.get(`${this.url}/user`);
  }
}
