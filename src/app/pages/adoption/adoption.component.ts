import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PotatoCardComponent } from '../../components/potato-card/potato-card.component';

@Component({
  selector: 'app-adoption',
  imports: [CommonModule, PotatoCardComponent],
  templateUrl: './adoption.component.html',
  styleUrl: './adoption.component.css'
})
export class AdoptionComponent {

  potatoes = [
    {
      image: '/sample potatos/1.jpg',
      name: 'سیب‌زمینی خردمند',
      size: 'XS',
      price: 350,
      motto: "زندگی آب روان است",
      birthMonth: 'اردیبهشت',
      mbti: 'ENFJ'
    },
    {
      image: '/sample potatos/1.jpg',
      name: 'سیب‌زمینی نابخرد',
      size: 'XS',
      price: 350,
      motto: "زندگی لهو و لعب است",
      birthMonth: 'فروردین',
      mbti: 'ESFP'
    },
    {
      image: '/sample potatos/1.jpg',
      name: 'سیب‌زمینی خفن',
      size: 'XS',
      price: 350,
      motto: "زندگی آب روان است",
      birthMonth: 'تیر',
      mbti: 'INTJ'
    },
    {
      image: '/sample potatos/1.jpg',
      name: 'سیب‌زمینی ایرادی',
      size: 'XS',
      price: 350,
      motto: "زندگی لهو و لعب است",
      birthMonth: 'خرداد',
      mbti: 'ISTJ'
    },
    {
      image: '/sample potatos/1.jpg',
      name: 'سیب‌زمینی خردمند',
      size: 'XS',
      price: 350,
      motto: "زندگی آب روان است",
      birthMonth: 'اردیبهشت',
      mbti: 'ENFJ'
    },
    {
      image: '/sample potatos/1.jpg',
      name: 'سیب‌زمینی نابخرد',
      size: 'XS',
      price: 350,
      motto: "زندگی لهو و لعب است",
      birthMonth: 'فروردین',
      mbti: 'ESFP'
    },
    {
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
