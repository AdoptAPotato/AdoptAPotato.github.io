import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

import { CreatorExplanationComponent } from '../../components/creator-explanation/creator-explanation.component';
import { LookCreatorComponent } from '../../components/look-creator/look-creator.component';
import { PersonalityCreatorComponent } from '../../components/personality-creator/personality-creator.component';
import { CreatorSubmitComponent } from '../../components/creator-submit/creator-submit.component';
import { AssetLoaderService } from '../../services/asset-loader.service';
import { LoadingComponent } from '../../components/loading/loading.component';
import { Category } from '../../models/creator';
import { ApiService } from '../../services/api.service';
import { CreatorStateService } from '../../services/creator-state.service';
import { creatorInfo } from '../../data/creator-info';

@Component({
  selector: 'app-character-creator',
  imports: [
    CommonModule,
    NgbToastModule,
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

  @ViewChild(LookCreatorComponent)
  child!: LookCreatorComponent;

  showErrorToast = false;

  currentStep: number = 1;
  maxSteps: number = 3;

  categories: Category[] = creatorInfo;

  imagesLoaded = false;

  isSubmitting = false;

  constructor(
    private assetLoader: AssetLoaderService,
    private state: CreatorStateService,
    private api: ApiService
  ) {}

  async ngOnInit() {
    const thumbnailUrls = this.categories
      .flatMap(category => [
        category.image,
        ...category.items.map(item => item.thumbnail)
      ])
      .filter((url): url is string => !!url);

    const images = [
      ...thumbnailUrls,
      '/sample POTATO/real.png',
      '/sample POTATO/arrow.png',
      '/sample POTATO/animation.png',
      '/wizard/base.png',
      '/textures/rays.png'
    ];

    await this.assetLoader.preloadImages(images);

    this.imagesLoaded = true;

    const imageUrls = this.categories
      .flatMap(category => category.items)
      .flatMap(item => [
        item.mask,
        item.shadow,
        item.fixed
      ])
      .filter((url): url is string => !!url);

    this.assetLoader.preloadImages(imageUrls);
  }

  next() {
    if (this.currentStep == 2 && !this.child.isValid()) {
      this.child.form.control.markAllAsTouched();
      return;
    }

    this.currentStep++;
  }

  async submit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;

    try {
      const response = await this.api.submitPotato();

      this.state.nationalID = response.nationalID;

      this.currentStep++;
    } catch (error) {
      console.error('Failed to submit order', error);

      this.showErrorToast = false;

      setTimeout(() => {
        this.showErrorToast = true;
      });
    } finally {
      this.isSubmitting = false;
    }
  }

  previous() {
    this.currentStep--;
  }
}
