import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CreatorWizardComponent } from '../../components/creator-wizard/creator-wizard.component';
import { CreatorExplanationComponent } from '../../components/creator-explanation/creator-explanation.component';
import { ExtraItem } from '../../models/creator';
import { CreatorStateService } from '../../services/creator-state.service';

@Component({
  selector: 'app-character-creator',
  imports: [
    CommonModule, 
    FormsModule,
    CreatorWizardComponent, 
    CreatorExplanationComponent
  ],
  templateUrl: './character-creator.component.html',
  styleUrl: './character-creator.component.css'
})
export class CharacterCreatorComponent {

  currentStep: number = 1;
  maxSteps: number = 3;

  isDragging = false;

  images: {
    file: File;
    preview: string;
  }[] = [];

  constructor(public state: CreatorStateService) {}

  next() {
    this.currentStep++;
  }

  previous() {
    this.currentStep--;
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
