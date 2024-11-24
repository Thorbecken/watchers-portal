import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fauna } from '../shared/models/world';

@Injectable({
  providedIn: 'root'
})
export class FaunaService {
  url = environment.apiHost; 

  constructor(private http: HttpClient) { }


  getFauna(): Observable<Fauna[]> {
    return this.http.get<Fauna[]>(`${this.url}/fauna`);
  }

  placeFauna(x: number, y: number, type: string): Observable<any> {
    return this.http.put(`${this.url}/fauna/${x}/${y}/${type}`, {});
  }
}
