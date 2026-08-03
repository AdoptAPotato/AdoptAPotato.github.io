import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CreatorWizardComponent } from '../../components/creator-wizard/creator-wizard.component';

@Component({
  selector: 'app-character-creator',
  imports: [FormsModule, CreatorWizardComponent],
  templateUrl: './character-creator.component.html',
  styleUrl: './character-creator.component.css'
})
export class CharacterCreatorComponent {

  potatoName: string = 'Max the POTATO';

}
