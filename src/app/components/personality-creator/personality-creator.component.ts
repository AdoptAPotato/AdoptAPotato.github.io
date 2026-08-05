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

  months: string[] = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"
  ]

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
