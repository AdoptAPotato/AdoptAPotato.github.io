import { Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { CharacterCreatorComponent } from './pages/character-creator/character-creator.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'creator',
        component: CharacterCreatorComponent
      }
    ]
  }
];
