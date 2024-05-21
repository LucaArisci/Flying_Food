import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { environment } from '../../environment/environment.dev';

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get<Category[]>(`${environment.apiUrl}/tags`, {
      headers: new HttpHeaders().set('x-api-key', environment.apiKey),
    });
  }
}
