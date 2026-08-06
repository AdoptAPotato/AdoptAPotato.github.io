import { Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { CharacterCreatorComponent } from './pages/character-creator/character-creator.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AdoptionComponent } from './pages/adoption/adoption.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'adoption', component: AdoptionComponent },
      { path: 'creator', component: CharacterCreatorComponent },
      { path: 'about', component: AboutUsComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];
