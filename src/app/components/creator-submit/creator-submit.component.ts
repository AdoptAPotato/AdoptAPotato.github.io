import { Component } from '@angular/core';

import { CharacterRendererService } from '../../services/character-renderer.service';
import { CreatorStateService } from '../../services/creator-state.service';
import { PHONE_NUMBER } from '../../data/constants';

@Component({
  selector: 'app-creator-submit',
  imports: [],
  templateUrl: './creator-submit.component.html',
  styleUrl: './creator-submit.component.css'
})
export class CreatorSubmitComponent {

  constructor(
    public state: CreatorStateService,
    public renderer:CharacterRendererService
  ) {}

  get phoneNumber() {
    return PHONE_NUMBER;
  }

}
