import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreatorStateService } from '../../services/creator-state.service';
import { MBTI_TYPES, ELEMENTS, MONTHS } from '../../data/constants';


@Component({
  selector: 'app-personality-creator',
  imports: [CommonModule, FormsModule],
  templateUrl: './personality-creator.component.html',
  styleUrl: './personality-creator.component.css'
})
export class PersonalityCreatorComponent {

  mbtiTypes = MBTI_TYPES
  elements = ELEMENTS;
  months = MONTHS;

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
