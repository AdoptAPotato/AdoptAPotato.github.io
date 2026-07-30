import { Injectable } from '@angular/core';

import { EquippedItem } from '../models/creator';

@Injectable({
  providedIn: 'root'
})
export class CharacterRendererService {

  private imageCache = new Map<string, HTMLImageElement>();

  private off = document.createElement('canvas');
  private offCtx = this.off.getContext('2d')!;

  constructor() { }

  private async loadImage(src: string): Promise<HTMLImageElement> {
    const cached = this.imageCache.get(src);
    if (cached) {
      return cached;
    }

    return new Promise(resolve => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        this.imageCache.set(src, img);
        resolve(img);
      };
    });
  }

  private async drawColoredPart(canvas: HTMLCanvasElement, mask?:string, shadow?:string, fixed?:string, color?:string) {
    // Reuse one offscreen canvas
    this.off.width = canvas.width;
    this.off.height = canvas.height;
    this.offCtx.clearRect(0, 0, this.off.width, this.off.height);

    const ctx = canvas.getContext('2d');

    var maskImg = null;
    var shadowImg = null;
    var fixedImg = null;

    // Mask
    if (mask) {
      maskImg = await this.loadImage(mask);
      this.offCtx.drawImage(maskImg, 0, 0);
    }

    // Color
    if (color) {
      this.offCtx.globalCompositeOperation = "source-in";
      this.offCtx.fillStyle = color;
      this.offCtx.fillRect(0, 0, this.off.width, this.off.height);
    }

    // Clip the shadow to the colored shirt
    if (shadow) {
      shadowImg = await this.loadImage(shadow);

      this.offCtx.globalCompositeOperation = "soft-light";
      this.offCtx.drawImage(shadowImg, 0, 0);
    }

    if (maskImg) {	
      this.offCtx.globalCompositeOperation = "destination-in";
      this.offCtx.drawImage(maskImg, 0, 0);
    }

    // Reset
    this.offCtx.globalCompositeOperation = "destination-over";

    // Draw fixed artwork LAST
    if (fixed) {
      fixedImg = await this.loadImage(fixed);
      this.offCtx.drawImage(fixedImg, 0, 0);
    }

    // Draw on main canvas
    ctx?.drawImage(this.off, 0, 0);
  }

  async render(canvas: HTMLCanvasElement, equippedItems: EquippedItem[]) {
    equippedItems.sort(
      (a, b) => (a.item.z_index ?? Number.MIN_SAFE_INTEGER) - (b.item.z_index ?? Number.MIN_SAFE_INTEGER)
    );

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw the base
    const baseImg = await this.loadImage("/base.png");
    
    canvas.width = baseImg.width;
    canvas.height = baseImg.height;

    ctx.drawImage(baseImg, 0, 0);

    // draw each additional item
    for (const i of equippedItems) {
      await this.drawColoredPart(
        canvas,
        i.item.mask, 
        i.item.shadow, 
        i.item.fixed, 
        i.selectedColor!
      );
    }
  }
}
