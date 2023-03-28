import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { World } from '../shared/models/world';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  url = environment.apiHost + '/world/';

  constructor(private http: HttpClient) {
  }

  getWorld(worldId: string): Observable<World> {
    let world: Observable<World> =  this.http.get<World>(this.url + worldId);
    return world;
  }

}
