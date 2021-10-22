import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  call (url: string, body: object) {
    
    return new Promise((resolve, reject) => {
      // this._http.get(url, body);
      resolve('');
    });
  }
}
