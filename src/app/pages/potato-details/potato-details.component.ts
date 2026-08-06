import { Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ELEMENTS, MBTI_TYPES, MONTHS, POTATOES, SIZES } from '../../data/constants';
import { Potato } from '../../models/potato';

@Component({
  selector: 'app-potato-details',
  imports: [CommonModule],
  templateUrl: './potato-details.component.html',
  styleUrl: './potato-details.component.css'
})
export class PotatoDetailsComponent {

  potato?: Potato;

  mbtiType: any;
  birthMonthElement: any;
  size: any;

  signed = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) return;

    this.potato = POTATOES.find(p => p.id === +id);

    this.birthMonthElement = ELEMENTS[MONTHS.find(t => t.name === this.potato!.birthMonth)!.element];
    this.mbtiType = MBTI_TYPES.find(t => t.code === this.potato!.mbti);
    this.size = SIZES.find(t => t.code === this.potato!.size);
  }

  sign() {

    if (this.signed)
        return;

    this.signed = true;

    setTimeout(() => {

        // open your modal here

    }, 1800);

  }

}
