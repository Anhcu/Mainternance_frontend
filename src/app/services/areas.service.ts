import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Area } from '../models/area';
import { Observable } from 'rxjs';
import { ApiRespone } from '../models/apiresponse';

@Injectable({
  providedIn: 'root'
})
export class AreasService {
  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000/areas/';

  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(this.baseUrl);
  }

  createArea(area: Area): Observable<any> {
    return this.http.post<Area>(this.baseUrl, area);
  }

  updateArea(area: Area): Observable<any> {
    return this.http.put<any>(this.baseUrl + area.id, area);
  }

  deleteArea(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + id);
  }
}

