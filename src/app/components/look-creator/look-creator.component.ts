import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CreatorWizardComponent } from '../../components/creator-wizard/creator-wizard.component';
import { ExtraItem } from '../../models/creator';
import { CreatorStateService } from '../../services/creator-state.service';
import { PricingService } from '../../services/pricing.service';
import { SIZES } from '../../data/constants';

@Component({
  selector: 'app-look-creator',
  imports: [
    CommonModule, 
    FormsModule,
    CreatorWizardComponent 
  ],
  templateUrl: './look-creator.component.html',
  styleUrl: './look-creator.component.css'
})
export class LookCreatorComponent {

  isDragging = false;
  
  images: {
    file: File;
    preview: string;
  }[] = [];

  constructor(
    public state: CreatorStateService,
    public pricingService: PricingService
  ) {}

  get sizes() {
    return SIZES;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;

    if (!event.dataTransfer?.files.length) {
      return;
    }

    this.addFiles(event.dataTransfer.files);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    this.addFiles(input.files);

    // Allows selecting the same file again later
    input.value = '';
  }

  private addFiles(fileList: FileList) {
    Array.from(fileList).forEach(file => {

      if (!file.type.startsWith('image/')) {
        return;
      }

      this.images.push({
        file,
        preview: URL.createObjectURL(file)
      });

    });
  }

  removeImage(image: { file: File; preview: string }, event: MouseEvent) {
    event.stopPropagation();

    URL.revokeObjectURL(image.preview);

    this.images = this.images.filter(i => i !== image);
  }

  addItem() {
    this.state.extraItems.push({
      description: '',
      isCustom: false
    });
  }


  removeItem(index: number) {
    this.state.extraItems.splice(index, 1);
  }


  onItemImageSelected(event: Event, item: ExtraItem) {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    const file = input.files[0];

    item.image = file;
    item.preview = URL.createObjectURL(file);

    input.value = '';
  }

}
