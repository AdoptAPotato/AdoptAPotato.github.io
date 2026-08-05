import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

import { EquippedItem, ExtraItem } from '../models/creator';

@Injectable({
  providedIn: 'root'
})
export class CreatorStateService {

  potatoName = signal('Max the POTATO');

  equippedItems: EquippedItem[] = [];

  extraItems: ExtraItem[] = [];

  strengths: string[] = [];

  weaknesses: string[] = [];

  boxWidth: number = 4;

  orderID: number = 1234;
  
}
