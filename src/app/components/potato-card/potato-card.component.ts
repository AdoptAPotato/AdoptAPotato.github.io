import { Component } from '@angular/core';

import { ELEMENTS, MBTI_TYPES, MONTHS } from '../../data/constants';

@Component({
  selector: 'app-potato-card',
  imports: [],
  templateUrl: './potato-card.component.html',
  styleUrl: './potato-card.component.css'
})
export class PotatoCardComponent {

  potato = {
    image: '/sample potatos/1.jpg',
    name: 'سیب‌زمینی خردمند',
    size: 'XS',
    price: 350,
    motto: "زندگی آب روان است",
    birthMonth: 'اردیبهشت',
    mbti: 'ENFJ'
  }

  birthMonthElement = ELEMENTS[MONTHS.find(t => t.name === this.potato.birthMonth)!.element];
  mbtiType = MBTI_TYPES.find(t => t.code === this.potato.mbti);

}
