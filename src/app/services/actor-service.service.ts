import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  url = 'http://localhost:8080/actors/'; 

  constructor(private http: HttpClient) { }

  seedLife(worldId: number, xCoord: number, yCoord: number): Observable<Object> {
    let endUrl: string = this.url + worldId + "/" + xCoord + "/" + yCoord
    console.log(endUrl)
    
    return this.http.get<Object>(endUrl);
  }
}
