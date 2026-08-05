import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorExplanationComponent } from '../../components/creator-explanation/creator-explanation.component';
import { LookCreatorComponent } from '../../components/look-creator/look-creator.component';
import { PersonalityCreatorComponent } from '../../components/personality-creator/personality-creator.component';

@Component({
  selector: 'app-character-creator',
  imports: [
    CommonModule,
    CreatorExplanationComponent,
    LookCreatorComponent,
    PersonalityCreatorComponent
  ],
  templateUrl: './character-creator.component.html',
  styleUrl: './character-creator.component.css'
})
export class CharacterCreatorComponent {

  currentStep: number = 1;
  maxSteps: number = 3;

  next() {
    this.currentStep++;
  }

  previous() {
    this.currentStep--;
  }
}
