import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable, of, tap } from 'rxjs';

import { Potato } from '../models/potato';
import { CreatorStateService } from './creator-state.service';
import { CharacterRendererService } from './character-renderer.service';
import { environment } from '../../environments/environment';
import { PricingService } from './pricing.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl;

  private potatoes: Potato[] | null = null;


  constructor(
    private http: HttpClient, 
    private state: CreatorStateService,
    private renderer: CharacterRendererService,
    private pricing: PricingService
  ) {}

  
  getPotatoes(): Observable<Potato[]> {
    if (this.potatoes) {
      return of(this.potatoes);
    }

    return this.http.get<Potato[]>(this.apiUrl).pipe(
      tap(potatoes => this.potatoes = potatoes)
    );
  }

  setPotatoes(potatoes: Potato[]) {
    this.potatoes = potatoes;
  }

  getPotatoById(national_id: string): Potato | undefined {
    return this.potatoes!.find(p => p.national_id === national_id);
  }


  async submitPotato() {
    // Create the potato image file from what canvas has saved
    const response = await fetch(this.renderer.lastRenderedImage!);
    const blob = await response.blob();

    const imgFile = new File(
      [blob],
      'potato.png',
      { type: 'image/png' }
    );

    // Create the request
    const formData = new FormData();

    const data = {
      name: this.state.potatoName(),
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

      price: this.pricing.getBreakdown().total,
      
      extraItems: this.state.extraItems.map(item => ({
        description: item.description,
        isCustom: item.isCustom
      }))
    }

    formData.append(
      'data',
      JSON.stringify(data)
    );

    formData.append(
      'image',
      imgFile
    );

    this.state.additionalImages.forEach(image => {
      formData.append(
        'additional_images',
        image
      );
    });

    this.state.extraItems.forEach((item, index) => {
      if (item.image) {
        formData.append(
          `extra_item_images_${index}`,
          item.image
        );
      }
    });

    // Post the request
    return await firstValueFrom(
      this.http.post<{ nationalID: string }>(
        this.apiUrl + 'order/',
        formData
      )
    );
  }

}
