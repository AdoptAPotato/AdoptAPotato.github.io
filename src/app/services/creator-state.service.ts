import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

import { EquippedItem, ExtraItem } from '../models/creator';
import { ELEMENTS, MONTHS } from '../data/constants';

@Injectable({
  providedIn: 'root'
})
export class CreatorStateService {

  nationalID: string = '';
  
  potatoName = signal('Max the POTATO');
  size: string = 'XS';
  description: string = '';

  birthMonth: string | undefined = undefined;
  mbti: string | undefined = undefined;
  favoriteFood: string = '';
  favoriteHobby: string = '';
  funFact: string = '';

  strengths: string[] = [];
  weaknesses: string[] = [];

  additionalImages: File[] = [];

  extraItems: ExtraItem[] = [];

  // Only used in the wizard
  equippedItems: EquippedItem[] = [];


  get element() {
    return ELEMENTS[MONTHS.find(t => t.name === this.birthMonth)!.element]
  }
  
}
