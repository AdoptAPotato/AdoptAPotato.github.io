import { Injectable } from '@angular/core';

import { CreatorStateService } from './creator-state.service';
import { 
  BASIC_COST, 
  ONE_CUSTOM_COST, 
  READY_ITEM_COST, 
  THREE_PLUS_CUSTOM_COST, 
  TWO_CUSTOM_COST 
} from '../data/constants';

@Injectable({
  providedIn: 'root'
})
export class PricingService {

  constructor(private state: CreatorStateService) {}

  getBreakdown() {

    const breakdown = [];

    breakdown.push({
      title: 'هزینه پایه (بر حسب سایز جعبه)',
      cost: BASIC_COST[this.state.boxWidth]
    });

    const readyCount =
      this.state.equippedItems.filter(i => i.item.group_id > 4).length +
      this.state.extraItems.filter(i => !i.isCustom).length;

    if (readyCount) {
      breakdown.push({
        title: `آیتم آماده × ${readyCount.toLocaleString('fa-IR')}`,
        cost: readyCount * READY_ITEM_COST
      });
    }

    const customCount =
      this.state.extraItems.filter(i => i.isCustom).length;

    if (customCount === 1) {
      breakdown.push({
        title: 'آیتم سفارشی × ۱',
        cost: ONE_CUSTOM_COST
      });
    } else if (customCount === 2) {
      breakdown.push({
        title: 'آیتم سفارشی × ۲',
        cost: TWO_CUSTOM_COST * 2
      });
    } else if (customCount >= 3) {
      breakdown.push({
        title: `آیتم سفارشی × ${customCount.toLocaleString('fa-IR')}`,
        cost: THREE_PLUS_CUSTOM_COST * customCount
      });
    }

    const total = breakdown.reduce((s, x) => s + x.cost, 0);

    return { breakdown, total };
  }

}
