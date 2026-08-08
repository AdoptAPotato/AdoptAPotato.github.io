import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PotatoCardComponent } from '../../components/potato-card/potato-card.component';
import { MBTI_TYPES, MONTHS, POTATOES } from '../../data/constants';
import { Potato } from '../../models/potato';
import { AssetLoaderService } from '../../services/asset-loader.service';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-adoption',
  imports: [CommonModule, FormsModule, PotatoCardComponent, LoadingComponent],
  templateUrl: './adoption.component.html',
  styleUrl: './adoption.component.css'
})
export class AdoptionComponent implements OnInit, AfterViewInit {

  filteredPotatoes: Potato[] = [];
  
  filterMbti: string = '';
  filterMonth: string = '';

  get potatoes() {
    return POTATOES
  }
  
  get mbtiTypes() {
    return MBTI_TYPES;
  }
  
  get months() {
    return MONTHS;
  }

  imagesLoaded = false;
  
  constructor(private assetLoader: AssetLoaderService) {}

  async ngOnInit() {
    this.filteredPotatoes = [...this.potatoes];

    const images = [
      '/textures/chuck line.png',
      '/textures/tape.png',
      '/textures/paper.png',
      '/textures/hr.png',
      '/textures/paper_cropped.png'
    ];

    await this.assetLoader.preloadImages(images);

    this.imagesLoaded = true;
  }

  ngAfterViewInit() {
    document.querySelectorAll('app-potato-card').forEach(el => {
      const rotation = (Math.random() - 0.5) * 6;
      (el as HTMLElement).style.transform = `rotate(${rotation}deg)`;
    });
  }

  applyFilters() {
    this.filteredPotatoes = this.potatoes.filter(potato => {
      const matchMbti = !this.filterMbti || potato.mbti === this.filterMbti;
      const matchMonth = !this.filterMonth || potato.birthMonth === this.filterMonth;
      return matchMbti && matchMonth;
    });
  }

  resetFilters() {
    this.filterMbti = '';
    this.filterMonth = '';
    this.applyFilters();
  }
}
