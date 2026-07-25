import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgbPopoverModule, NgbPopover } from '@ng-bootstrap/ng-bootstrap';

import { Category, Item, EquippedItem } from '../../models/creator';

@Component({
  selector: 'app-character-creator',
  imports: [CommonModule, NgbPopoverModule],
  templateUrl: './character-creator.component.html',
  styleUrl: './character-creator.component.css'
})
export class CharacterCreatorComponent implements OnInit {

  categories: Category[] = [];
  selectedItems: EquippedItem[] = [];
  selectedCategory?: Category;
  popoverItem?: Item;
  openPopover?: NgbPopover;
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Category[]>('/data/creator-info.json')
      .subscribe(data => {
        this.categories = data;

        this.selectedItems = this.categories
          .filter(c => !c.nullable)
          .map(c => ({
            item: c.items[0],
            selectedColor: c.items[0].colors?.[0] ?? null
          }));

        this.selectedCategory = this.categories[0];
      });
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  selectItem(item: Item, popover: NgbPopover) {
    const category = this.selectedCategory!;

    if (item.colors && item.colors.length > 1) {
      this.popoverItem = item;
      popover.open();
      this.openPopover = popover;
      return;
    }

    this.equipItem(item, null);
  }

  selectColor(color: string) {
    this.equipItem(this.popoverItem!, color);

    this.openPopover?.close();
  }

  equipItem(item: Item, color: string | null) {
    const category = this.selectedCategory!;

    const index = this.selectedItems.findIndex(
      i => i.item.group_id === item.group_id
    );

    if (index !== -1 && this.selectedItems[index].item === item) {

      if (category.nullable) {
        this.selectedItems.splice(index, 1);
      }

      return;
    }

    if (index !== -1)
      this.selectedItems[index] = {item: item, selectedColor: color};
    else
      this.selectedItems.push({item: item, selectedColor: color});

    this.popoverItem = undefined;
  }

  removeItem() {
    if (!this.popoverItem)
      return;

    const index = this.selectedItems.findIndex(
      i => i.item.group_id === this.popoverItem!.group_id
    );

    if (index !== -1)
      this.selectedItems.splice(index, 1);

    this.popoverItem = undefined;
  }

  isSelected(item: Item): boolean {
    return this.selectedItems.some(i => i.item === item);
  }
}
