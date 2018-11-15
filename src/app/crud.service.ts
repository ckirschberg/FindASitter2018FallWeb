import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sitter } from './entities/sitter';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private baseUrl: String  = "http://angular2api1.azurewebsites.net/api/internships/"

  constructor(private http: HttpClient) { }

  getAllSitters() {
    return this.http.get(this.baseUrl + 'GetAll');
  }  

  createSitter(sitter: Sitter) {
    sitter.customerId = 'chrk';
    return this.http.post(this.baseUrl + 'Create', sitter, {responseType: 'text'});
  }


}
