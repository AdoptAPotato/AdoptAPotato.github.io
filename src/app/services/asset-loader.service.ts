import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetLoaderService {

  private loadedImages = new Set<string>();

  preloadImages(urls: string[]): Promise<void> {
    const newUrls = urls.filter(url => !this.loadedImages.has(url));

    return Promise.all(
      newUrls.map(url => this.preloadImage(url))
    ).then(() => {
      newUrls.forEach(url => this.loadedImages.add(url));
    });
  }

  private preloadImage(url: string): Promise<void> {

    return new Promise(resolve => {

      const image = new Image();

      image.onload = () => resolve();

      image.onerror = () => resolve();

      image.src = url;

    });

  }

}
