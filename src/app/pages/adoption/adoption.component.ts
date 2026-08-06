import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PotatoCardComponent } from '../../components/potato-card/potato-card.component';
import { MBTI_TYPES, MONTHS, POTATOES } from '../../data/constants';
import { Potato } from '../../models/potato';

@Component({
  selector: 'app-adoption',
  imports: [CommonModule, FormsModule, PotatoCardComponent],
  templateUrl: './adoption.component.html',
  styleUrl: './adoption.component.css'
})
export class AdoptionComponent {

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

  ngOnInit() {
    this.filteredPotatoes = [...this.potatoes];
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
