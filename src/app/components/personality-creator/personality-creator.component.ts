import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreatorStateService } from '../../services/creator-state.service';
import { MBTI_TYPES, MONTHS } from '../../data/constants';


@Component({
  selector: 'app-personality-creator',
  imports: [CommonModule, FormsModule],
  templateUrl: './personality-creator.component.html',
  styleUrl: './personality-creator.component.css'
})
export class PersonalityCreatorComponent {

  newStrength = '';
  newWeakness = '';

  constructor(public state: CreatorStateService) {}

  get mbtiTypes() {
    return MBTI_TYPES;
  }

  get months() {
    return MONTHS;
  }

  addStrength() {
    const value = this.newStrength.trim();

    if (!value) return;

    this.state.strengths.push(value);
    this.newStrength = '';
  }

  removeStrength(item: string) {
    this.state.strengths = this.state.strengths.filter(x => x !== item);
  }

  addWeakness() {
    const value = this.newWeakness.trim();

    if (!value) return;

    this.state.weaknesses.push(value);
    this.newWeakness = '';
  }

  removeWeakness(item: string) {
    this.state.weaknesses = this.state.weaknesses.filter(x => x !== item);
  }

}
