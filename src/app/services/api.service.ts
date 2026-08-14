import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Potato } from '../models/potato';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:8000/api/potatoes/';
  private mediaUrl = 'http://127.0.0.1:8000';

  private potatoes: Potato[] = [];

  constructor(private http: HttpClient) {}

  getPotatoes(): Observable<Potato[]> {
    return this.http.get<Potato[]>(this.apiUrl);
  }

  setPotatoes(potatoes: Potato[]) {
    this.potatoes = potatoes;
  }

  getPotatoById(national_id: string): Potato | undefined {
    return this.potatoes.find(p => p.national_id === national_id);
  }

  getImageUrl(image: string): string {
    return this.mediaUrl + image;
  }
  
}
