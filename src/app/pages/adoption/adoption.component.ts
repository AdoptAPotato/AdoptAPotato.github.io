import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PotatoCardComponent } from '../../components/potato-card/potato-card.component';
import { MBTI_TYPES, MONTHS } from '../../data/constants';
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

  potatoes = [
    {
      id: 1,
      image: '/sample potatos/1.jpg',
      name: 'سیب‌زمینی خردمند',
      size: 'XS',
      price: 350,
      motto: "زندگی آب روان است",
      birthMonth: 'اردیبهشت',
      mbti: 'ENFJ'
    },
    {
      id: 2,
      image: '/sample potatos/1.jpg',
      name: 'سیب‌زمینی نابخرد',
      size: 'XS',
      price: 350,
      motto: "زندگی لهو و لعب است",
      birthMonth: 'فروردین',
      mbti: 'ESFP'
    },
    {
      id: 3,
      image: '/sample potatos/1.jpg',
      name: 'سیب‌زمینی خفن',
      size: 'XS',
      price: 350,
      motto: "زندگی آب روان است",
      birthMonth: 'تیر',
      mbti: 'INTJ'
    },
    {
      id: 4,
      image: '/sample potatos/1.jpg',
      name: 'سیب‌زمینی ایرادی',
      size: 'XS',
      price: 350,
      motto: "زندگی لهو و لعب است",
      birthMonth: 'خرداد',
      mbti: 'ISTJ'
    },
    {
      id: 5,
      image: '/sample potatos/1.jpg',
      name: 'سیب‌زمینی خردمند',
      size: 'XS',
      price: 350,
      motto: "زندگی آب روان است",
      birthMonth: 'اردیبهشت',
      mbti: 'ENFJ'
    },
    {
      id: 6,
      image: '/sample potatos/1.jpg',
      name: 'سیب‌زمینی نابخرد',
      size: 'XS',
      price: 350,
      motto: "زندگی لهو و لعب است",
      birthMonth: 'فروردین',
      mbti: 'ESFP'
    },
    {
      id: 7,
      image: '/sample potatos/1.jpg',
      name: 'سیب‌زمینی خردمند',
      size: 'XS',
      price: 350,
      motto: "زندگی آب روان است",
      birthMonth: 'اردیبهشت',
      mbti: 'ENFJ'
    }
  ]

}
