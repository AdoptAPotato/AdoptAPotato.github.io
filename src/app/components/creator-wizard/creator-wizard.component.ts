import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { NgbPopoverModule, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { effect } from '@angular/core';

import { Category, Item } from '../../models/creator';
import { CharacterRendererService }  from '../../services/character-renderer.service';
import { CreatorStateService } from '../../services/creator-state.service';

@Component({
  selector: 'app-creator-wizard',
  imports: [CommonModule, NgbPopoverModule],
  templateUrl: './creator-wizard.component.html',
  styleUrl: './creator-wizard.component.css'
})
export class CreatorWizardComponent implements OnInit {

  @Input() categories: Category[] = [];

  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;

  selectedCategory?: Category;
  popoverItem?: Item;
  openPopover?: NgbPopover;

  constructor(
    private renderer:CharacterRendererService,
    private state: CreatorStateService
  ) {
    effect(() => {
      this.state.potatoName();

      this.render();
    });
  }

  ngOnInit(): void {
    this.state.equippedItems = this.categories
      .filter(c => !c.nullable)
      .map(c => ({
        item: c.items[0],
        selectedColor: c.items[0].colors?.[0] ?? null
      }));

    this.selectedCategory = this.categories[0];

    this.render();
  }

  render() {
    this.renderer.render(
      this.canvas.nativeElement,
      this.state.equippedItems,
      this.state.potatoName()
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

    const index = this.state.equippedItems.findIndex(
      i => i.item.group_id === item.group_id
    );

    if (index !== -1 && !color && this.state.equippedItems[index].item === item) {

      if (category.nullable) {
        this.state.equippedItems.splice(index, 1);
      }

      this.render()

      return;
    }

    if (index !== -1)
      this.state.equippedItems[index] = {item: item, selectedColor: color};
    else
      this.state.equippedItems.push({item: item, selectedColor: color});

    this.popoverItem = undefined;

    this.render()
  }

  removeItem() {
    if (!this.popoverItem)
      return;

    const index = this.state.equippedItems.findIndex(
      i => i.item.group_id === this.popoverItem!.group_id
    );

    if (index !== -1)
      this.state.equippedItems.splice(index, 1);

    this.popoverItem = undefined;

    this.render()
  }

  isSelected(item: Item): boolean {
    return this.state.equippedItems.some(i => i.item === item);
  }

}
