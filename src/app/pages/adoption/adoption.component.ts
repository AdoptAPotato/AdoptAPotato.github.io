import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PotatoCardComponent } from '../../components/potato-card/potato-card.component';
import { MBTI_TYPES, MONTHS } from '../../data/constants';
import { Potato } from '../../models/potato';
import { AssetLoaderService } from '../../services/asset-loader.service';
import { LoadingComponent } from '../../components/loading/loading.component';
import { ApiService } from '../../services/api.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-adoption',
  imports: [CommonModule, FormsModule, PotatoCardComponent, LoadingComponent],
  templateUrl: './adoption.component.html',
  styleUrl: './adoption.component.css'
})
export class AdoptionComponent implements OnInit {

  potatoes: Potato[] = [];
  filteredPotatoes: Potato[] = [];
  
  filterMbti: string = '';
  filterMonth: string = '';
  
  get mbtiTypes() {
    return MBTI_TYPES;
  }
  
  get months() {
    return MONTHS;
  }

  imagesLoaded = false;
  
  constructor(
    private assetLoader: AssetLoaderService,
    private api: ApiService
  ) {}

  async ngOnInit() {
    await this.loadPotatoes();

    const images = [
      '/textures/chuck line.png',
      '/textures/tape.png',
      '/textures/paper.png',
      '/textures/hr.png',
      '/textures/paper_cropped.png',
      '/textures/stamp.png',
      '/textures/signature.png',
      '/elements/air.png',
      '/elements/fire.png',
      '/elements/earth.png',
      '/elements/water.png',

      ...this.potatoes.map(potato =>
        potato.image
      )
    ];

    await this.assetLoader.preloadImages(images);

    this.imagesLoaded = true;

    requestAnimationFrame(() => {
      document.querySelectorAll('app-potato-card').forEach(el => {
        const rotation = (Math.random() - 0.5) * 6;
        (el as HTMLElement).style.transform = `rotate(${rotation}deg)`;
      });
    });
  }

  async loadPotatoes() {
    try {
      this.potatoes = await firstValueFrom(
        this.api.getPotatoes()
      );

      this.api.setPotatoes(this.potatoes);

      this.filteredPotatoes = [...this.potatoes];
    } catch (error) {
      console.error('Failed to load potatoes', error);
    }
  }

  applyFilters() {
    this.filteredPotatoes = this.potatoes.filter(potato => {
      const matchMbti = !this.filterMbti || potato.mbti === this.filterMbti;
      const matchMonth = !this.filterMonth || potato.birth_month === this.filterMonth;
      return matchMbti && matchMonth;
    });
  }

  resetFilters() {
    this.filterMbti = '';
    this.filterMonth = '';
    this.applyFilters();
  }
}
