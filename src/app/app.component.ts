import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterCreatorComponent } from './character-creator/character-creator.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    CharacterCreatorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'adopt-a-potato';
}
