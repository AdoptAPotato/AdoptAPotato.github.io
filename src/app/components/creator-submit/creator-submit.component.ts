import { Component } from '@angular/core';

import { CharacterRendererService } from '../../services/character-renderer.service';
import { CreatorStateService } from '../../services/creator-state.service';

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

}
