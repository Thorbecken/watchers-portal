import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PointOfInterestService {
  url = environment.apiHost; 

  constructor(private http: HttpClient) { }

  createHotspot(xCoord: number, yCoord: number): Observable<Object> {
    let endUrl: string = this.url + '/hotspot' + xCoord + "/" + yCoord
    console.log(endUrl)
    
    return this.http.put<Object>(endUrl, "");
  }

  deleteHotspot(xCoord: number, yCoord: number): Observable<Object> {
    let endUrl: string = this.url + '/hotspot' + xCoord + "/" + yCoord
    console.log(endUrl)
    
    return this.http.delete<Object>(endUrl);
  }

  createTectonicPlume(xCoord: number, yCoord: number): Observable<Object> {
    let endUrl: string = this.url + '/tectonicPlume' + xCoord + "/" + yCoord
    console.log(endUrl)
    
    return this.http.put<Object>(endUrl, "");
  }

  deleteTectonicPlume(xCoord: number, yCoord: number): Observable<Object> {
    let endUrl: string = this.url + '/tectonicPlume' + xCoord + "/" + yCoord
    console.log(endUrl)
    
    return this.http.delete<Object>(endUrl);
  }

}
