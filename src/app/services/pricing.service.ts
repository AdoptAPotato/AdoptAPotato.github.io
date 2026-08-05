import { Injectable } from '@angular/core';

import { CreatorStateService } from './creator-state.service';

@Injectable({
  providedIn: 'root'
})
export class PricingService {

  basicCost = 300;

  readyItemCost = 100;

  oneCustomCost = 150;
  twoCustomCost = 125;
  threePlusCustomCost = 100;

  constructor(private state: CreatorStateService) {}

  getBreakdown() {

    const breakdown = [];

    breakdown.push({
      title: 'هزینه پایه',
      cost: this.basicCost
    });

    const readyCount =
      this.state.equippedItems.filter(i => i.item.group_id > 4).length +
      this.state.extraItems.filter(i => !i.isCustom).length;

    if (readyCount) {
      breakdown.push({
        title: `آیتم آماده × ${readyCount.toLocaleString('fa-IR')}`,
        cost: readyCount * this.readyItemCost
      });
    }

    const customCount =
      this.state.extraItems.filter(i => i.isCustom).length;

    if (customCount === 1) {
      breakdown.push({
        title: 'آیتم سفارشی × ۱',
        cost: this.oneCustomCost
      });
    } else if (customCount === 2) {
      breakdown.push({
        title: 'آیتم سفارشی × ۲',
        cost: this.twoCustomCost * 2
      });
    } else if (customCount >= 3) {
      breakdown.push({
        title: `آیتم سفارشی × ${customCount.toLocaleString('fa-IR')}`,
        cost: this.threePlusCustomCost * customCount
      });
    }

    const total = breakdown.reduce((s, x) => s + x.cost, 0);

    return { breakdown, total };
  }

}
