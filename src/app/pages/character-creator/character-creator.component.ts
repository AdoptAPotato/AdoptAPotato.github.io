import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorExplanationComponent } from '../../components/creator-explanation/creator-explanation.component';
import { LookCreatorComponent } from '../../components/look-creator/look-creator.component';
import { PersonalityCreatorComponent } from '../../components/personality-creator/personality-creator.component';
import { CreatorSubmitComponent } from '../../components/creator-submit/creator-submit.component';
import { AssetLoaderService } from '../../services/asset-loader.service';
import { LoadingComponent } from '../../components/loading/loading.component';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../models/creator';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-character-creator',
  imports: [
    CommonModule,
    CreatorExplanationComponent,
    LookCreatorComponent,
    PersonalityCreatorComponent,
    CreatorSubmitComponent,
    LoadingComponent
  ],
  templateUrl: './character-creator.component.html',
  styleUrl: './character-creator.component.css'
})
export class CharacterCreatorComponent {

  currentStep: number = 1;
  maxSteps: number = 3;

  imagesLoaded = false;
  
  categories: Category[] = [];

  constructor(
    private http: HttpClient,
    private assetLoader: AssetLoaderService,
    private api: ApiService
  ) {}

  async ngOnInit() {
    this.http.get<Category[]>('/data/creator-info.json')
      .subscribe(data => {
        this.categories = data;
      });

    const imageUrls = this.categories
      .flatMap(category => category.items)
      .flatMap(item => [
        item.thumbnail,
        item.mask,
        item.shadow,
        item.fixed
      ])
      .filter((url): url is string => !!url);

    const images = [
      ...imageUrls,
      '/sample POTATO/real.png',
      '/sample POTATO/arrow.png',
      '/sample POTATO/animation.png',
      '/wizard/base.png',
      '/textures/rays.png'
    ];

    await this.assetLoader.preloadImages(images);

    this.imagesLoaded = true;
  }

  next() {
    //Submit
    if (this.currentStep == this.maxSteps)
      this.api.submitPotato();

    this.currentStep++;
  }

  previous() {
    this.currentStep--;
  }
}
