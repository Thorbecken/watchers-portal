import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { World } from '../shared/models/world';

@Injectable({
  providedIn: 'root'
})
export class WorldService {
 url = 'http://localhost:8080/world/';

  constructor(private http: HttpClient) {
  }

  getWorld(worldId: string): Observable<World> {
    let world: Observable<World> =  this.http.get<World>(this.url + worldId);
    return world;
  }

}
