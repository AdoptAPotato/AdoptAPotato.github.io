import { Component } from '@angular/core';

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
    birthMonth: {
      name: 'مرداد',
      element: {
        name: 'خاک',
        img: 'earth',
        color: '#3c805b'
      }
    },

    mbti: {
      code: 'ENFJ',
      color: '#9b59b6'
    }
  }

}
