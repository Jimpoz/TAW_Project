import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpCliente: HttpClient
  ) {}

  get<T>(url: string, options?: any): Observable<T> {
    return this.httpCliente.get<T>(url, options) as Observable<T>;
  }
}
