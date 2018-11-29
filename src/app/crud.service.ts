import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sitter } from './entities/sitter';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private baseUrl: string  = "http://angular2api2.azurewebsites.net/api/internships/"

  constructor(private http: HttpClient) { }

  getAllSitters() {
    return this.http.get(this.baseUrl);
  }  

  createSitter(sitter: Sitter) {
    sitter.customerId = 'chrk';
    return this.http.post(this.baseUrl, sitter, {responseType: 'text'});
  }

  updateSitter(sitter: Sitter) {
    return this.http.put(this.baseUrl + sitter.sitterId, sitter, {responseType: 'text'});
  }

  deleteSitter(sitterId: string) {
    return this.http.delete(this.baseUrl + sitterId);
  }
}
