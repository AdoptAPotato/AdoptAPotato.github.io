import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreatorStateService } from '../../services/creator-state.service';

@Component({
  selector: 'app-personality-creator',
  imports: [CommonModule, FormsModule],
  templateUrl: './personality-creator.component.html',
  styleUrl: './personality-creator.component.css'
})
export class PersonalityCreatorComponent {

  mbtiTypes = [
    { code: 'INTJ', name: 'معمار', color: '#5c4dce' },
    { code: 'INTP', name: 'متفکر', color: '#5c4dce' },
    { code: 'ENTJ', name: 'فرمانده', color: '#5c4dce' },
    { code: 'ENTP', name: 'مجادل', color: '#5c4dce' },

    { code: 'INFJ', name: 'حامی', color: '#3fc756' },
    { code: 'INFP', name: 'میانجی', color: '#3fc756' },
    { code: 'ENFJ', name: 'قهرمان', color: '#3fc756' },
    { code: 'ENFP', name: 'کاوشگر', color: '#3fc756' },

    { code: 'ISTJ', name: 'بازرس', color: '#5fafec' },
    { code: 'ISFJ', name: 'مدافع', color: '#5fafec' },
    { code: 'ESTJ', name: 'مدیر', color: '#5fafec' },
    { code: 'ESFJ', name: 'سفیر', color: '#5fafec' },

    { code: 'ISTP', name: 'ماهر', color: '#e6d433' },
    { code: 'ISFP', name: 'ماجراجو', color: '#e6d433' },
    { code: 'ESTP', name: 'کارآفرین', color: '#e6d433' },
    { code: 'ESFP', name: 'سرگرم‌کننده', color: '#e6d433' }
  ];

  elements: { [key: string]: { name: string; img: string; color: string } } = {
    'fire': { name: 'آتش', img: 'fire.png', color: '#f7621e' },
    'earth': { name: 'خاک', img: 'earth.png', color: '#3c805b' },
    'air': { name: 'هوا', img: 'air.png', color: '#7472c5' },
    'water': { name: 'آب', img: 'water.png', color: '#208aba' }
  }

  months = [
    { name: 'فروردین', element: 'fire' },
    { name: 'اردیبهشت', element: 'earth' },
    { name: 'خرداد', element: 'air' },
    { name: 'تیر', element: 'water' },
    { name: 'مرداد', element: 'fire' },
    { name: 'شهریور', element: 'earth' },
    { name: 'مهر', element: 'air' },
    { name: 'آبان', element: 'water' },
    { name: 'آذر', element: 'fire' },
    { name: 'دی', element: 'earth' },
    { name: 'بهمن', element: 'air' },
    { name: 'اسفند', element: 'water' }
  ];

  constructor(public state: CreatorStateService) {}

  addStrength(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim();

    if (!value) return;

    this.state.strengths.push(value);
    input.value = '';
  }

  removeStrength(item: string) {
    this.state.strengths = this.state.strengths.filter(x => x !== item);
  }

  addWeakness(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim();

    if (!value) return;

    this.state.weaknesses.push(value);
    input.value = '';
  }

  removeWeakness(item: string) {
    this.state.weaknesses = this.state.weaknesses.filter(x => x !== item);
  }

}
