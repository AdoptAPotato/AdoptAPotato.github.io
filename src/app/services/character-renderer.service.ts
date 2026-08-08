import { Injectable } from '@angular/core';

import { EquippedItem } from '../models/creator';

@Injectable({
  providedIn: 'root'
})
export class CharacterRendererService {

  private imageCache = new Map<string, HTMLImageElement>();

  private off = document.createElement('canvas');
  private offCtx = this.off.getContext('2d')!;

  public lastRenderedImage: string | null = null;

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

  async render(canvas: HTMLCanvasElement, equippedItems: EquippedItem[], text?: string) {
    equippedItems.sort(
      (a, b) => (a.item.z_index ?? Number.MIN_SAFE_INTEGER) - (b.item.z_index ?? Number.MIN_SAFE_INTEGER)
    );

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw the base
    const baseImg = await this.loadImage("/wizard/base.png");
    
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

    if (text) {
      this.drawText(ctx, text, canvas.width, canvas.height);
    }

    this.lastRenderedImage = canvas.toDataURL('image/png');
  }

  private drawText(ctx: CanvasRenderingContext2D, text: string, canvasWidth: number, canvasHeight: number) {
    // Relative positioning based on base
    const fixedX = canvasWidth * 0.5;
    const fixedY = canvasHeight * 0.83;

    const fontSize = Math.round(canvasWidth * 0.045);
    
    ctx.save();
    
    // Text styling
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `bold ${fontSize}px Trebuchet MS, sans-serif`;
    
    // Split text into lines
    const maxWidth = canvasWidth * 0.25;
    const lines = this.wrapText(ctx, text, maxWidth);
    const lineHeight = fontSize * 1.3;
    
    // Draw each line
    ctx.fillStyle = '#3e2a0f';
    lines.forEach((line, index) => {
      const y = fixedY + (index - (lines.length - 1) / 2) * lineHeight;
      ctx.fillText(line, fixedX, y);
    });
    
    ctx.restore();
  }

  private wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const metrics = ctx.measureText(testLine);
      
      if (metrics.width > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    
    if (currentLine) {
      lines.push(currentLine);
    }
    
    return lines;
  }
}
