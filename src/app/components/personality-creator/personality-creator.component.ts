import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorStateService } from '../../services/creator-state.service';

@Component({
  selector: 'app-personality-creator',
  imports: [CommonModule],
  templateUrl: './personality-creator.component.html',
  styleUrl: './personality-creator.component.css'
})
export class PersonalityCreatorComponent {

  mbtiTypes: string[] = [
    'INTJ',
    'INTP',
    'ENTJ',
    'ENTP',

    'INFJ',
    'INFP',
    'ENFJ',
    'ENFP',

    'ISTJ',
    'ISFJ',
    'ESTJ',
    'ESFJ',

    'ISTP',
    'ISFP',
    'ESTP',
    'ESFP'
  ];;

  months: string[] = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"
  ]

  constructor(public state: CreatorStateService) {}

  addStrength(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim();

    if (!value) return;

    this.state.strengths.push(value);
    input.value = '';
  }

  removeStrength(item: string) {
    this.state.strengths = this.state.strengths.filter(x => x !== item);
  }

  addWeakness(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim();

    if (!value) return;

    this.state.weaknesses.push(value);
    input.value = '';
  }

  removeWeakness(item: string) {
    this.state.weaknesses = this.state.weaknesses.filter(x => x !== item);
  }

}
