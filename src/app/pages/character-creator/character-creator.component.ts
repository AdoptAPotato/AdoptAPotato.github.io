import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CreatorWizardComponent } from '../../components/creator-wizard/creator-wizard.component';
import { CreatorExplanationComponent } from '../../components/creator-explanation/creator-explanation.component';

@Component({
  selector: 'app-character-creator',
  imports: [CommonModule, FormsModule, CreatorWizardComponent, CreatorExplanationComponent],
  templateUrl: './character-creator.component.html',
  styleUrl: './character-creator.component.css'
})
export class CharacterCreatorComponent {

  currentStep: number = 1;
  maxSteps: number = 3
  
  potatoName: string = 'Max the POTATO';

  next() {
    this.currentStep++;
  }

  previous() {
    this.currentStep--;
  }

}
