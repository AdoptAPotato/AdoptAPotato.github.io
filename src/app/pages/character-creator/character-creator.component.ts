import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgbPopoverModule, NgbPopover } from '@ng-bootstrap/ng-bootstrap';

import { Category, Item, EquippedItem } from '../../models/creator';
import { CharacterRendererService }  from '../../services/character-renderer.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-creator',
  imports: [CommonModule, NgbPopoverModule, FormsModule],
  templateUrl: './character-creator.component.html',
  styleUrl: './character-creator.component.css'
})
export class CharacterCreatorComponent implements OnInit {

  categories: Category[] = [];
  selectedItems: EquippedItem[] = [];
  selectedCategory?: Category;
  popoverItem?: Item;
  openPopover?: NgbPopover;

  potatoName: string = 'Max the POTATO';

  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;
  
  constructor(private http: HttpClient, private renderer:CharacterRendererService) {}

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

        this.render()
      });
  }

  render() {
    this.renderer.render(
      this.canvas.nativeElement,
      this.selectedItems,
      this.potatoName
    );
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

    if (index !== -1 && !color && this.selectedItems[index].item === item) {

      if (category.nullable) {
        this.selectedItems.splice(index, 1);
      }

      this.render()

      return;
    }

    if (index !== -1)
      this.selectedItems[index] = {item: item, selectedColor: color};
    else
      this.selectedItems.push({item: item, selectedColor: color});

    this.popoverItem = undefined;

    this.render()
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

    this.render()
  }

  isSelected(item: Item): boolean {
    return this.selectedItems.some(i => i.item === item);
  }
}
