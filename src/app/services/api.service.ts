import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Potato } from '../models/potato';
import { Observable } from 'rxjs';
import { CreatorStateService } from './creator-state.service';
import { CharacterRendererService } from './character-renderer.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:8000/api/potatoes/';

  private potatoes: Potato[] = [];


  constructor(
    private http: HttpClient, 
    private state: CreatorStateService,
    private renderer: CharacterRendererService
  ) {}

  
  getPotatoes(): Observable<Potato[]> {
    return this.http.get<Potato[]>(this.apiUrl);
  }

  setPotatoes(potatoes: Potato[]) {
    this.potatoes = potatoes;
  }

  getPotatoById(national_id: string): Potato | undefined {
    return this.potatoes.find(p => p.national_id === national_id);
  }


  submitPotato() {
    const potato = {
      natnional_ID: this.state.nationalID,
      potatoName: this.state.potatoName(),
      size: this.state.size,
      description: this.state.description,
      birthMonth: this.state.birthMonth,
      mbti: this.state.mbti,
      favoriteFood: this.state.favoriteFood,
      favoriteHobby: this.state.favoriteHobby,
      funFact: this.state.funFact,
      strengths: this.state.strengths,
      weaknesses: this.state.weaknesses,
      additionalImages: this.state.additionalImages,
      extraItems: this.state.extraItems,
      image: this.renderer.lastRenderedImage
    }

    console.log(potato);
  }

}
