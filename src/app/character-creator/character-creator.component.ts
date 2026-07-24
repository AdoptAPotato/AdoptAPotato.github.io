import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Category, Item } from '../../models/creator';

@Component({
  selector: 'app-character-creator',
  imports: [CommonModule],
  templateUrl: './character-creator.component.html',
  styleUrl: './character-creator.component.css'
})
export class CharacterCreatorComponent implements OnInit {

  categories: Category[] = [];
  selectedItems: Item[] = [];
  selectedCategory?: Category;
  selectedItem?: Item;
  selectedColor?: string;
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Category[]>('/data/creator-info.json')
      .subscribe(data => {
        this.categories = data;

        this.selectedItems = this.categories.map(c => c.items[0]);
        this.selectedCategory = this.categories[0];
        this.selectedItem = this.selectedCategory.items[0];
        this.selectedColor = this.selectedItem.colors?.[0] ?? undefined;
      });
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;

    this.selectedItem = category.items[0];

    this.selectedColor = this.selectedItem.colors?.[0] ?? undefined;
  }

  selectItem(item: Item) {
    const category = this.selectedCategory!;
    const index = this.selectedItems.findIndex(
      i => i.group_id === item.group_id
    );

    if (index !== -1 && this.selectedItems[index] === item) {

      if (category.nullable) {
        this.selectedItems.splice(index, 1);
        this.selectedItem = undefined;
      }

      return;
    }

    if (index !== -1) {
      this.selectedItems[index] = item;
    } else {
      this.selectedItems.push(item);
    }

    this.selectedItem = item;
    this.selectedColor = item.colors?.[0] ?? undefined;
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  isSelected(item: Item): boolean {
    return this.selectedItems.includes(item);
  }
}
