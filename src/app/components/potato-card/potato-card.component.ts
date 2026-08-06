import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ELEMENTS, MBTI_TYPES, MONTHS } from '../../data/constants';
import { Potato } from '../../models/potato';

@Component({
  selector: 'app-potato-card',
  imports: [RouterLink],
  templateUrl: './potato-card.component.html',
  styleUrl: './potato-card.component.css'
})
export class PotatoCardComponent implements OnInit {

  @Input() potato!: Potato;

  birthMonthElement: any;
  mbtiType: any;

  ngOnInit(): void {
    this.birthMonthElement = ELEMENTS[MONTHS.find(t => t.name === this.potato.birthMonth)!.element];
    this.mbtiType = MBTI_TYPES.find(t => t.code === this.potato.mbti);
  }

}
