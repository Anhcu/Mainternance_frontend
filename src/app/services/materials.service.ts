import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from '../models/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {
  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000/materials/';



  getMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(this.baseUrl);
  }

  createMaterial(material: Material): Observable<any> {
    return this.http.post<Material>(this.baseUrl, material);
  }

  updateMaterial(material: Material): Observable<any> {
    return this.http.put<any>(this.baseUrl + material.id, material);
  }

  deleteMaterial(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + id);
  }
}
