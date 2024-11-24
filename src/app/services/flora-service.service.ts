import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flora } from '../shared/models/world';

@Injectable({
  providedIn: 'root'
})
export class FloraService {
  url = environment.apiHost; 

  constructor(private http: HttpClient) { }
  
  getFlora(): Observable<Flora[]> {
    return this.http.get<Flora[]>(`${this.url}/flora`);
  }

  placeFlora(x: number, y: number, type: string): Observable<any> {
    return this.http.put(`${this.url}/flora/${x}/${y}/${type}`, {});
  }
}
