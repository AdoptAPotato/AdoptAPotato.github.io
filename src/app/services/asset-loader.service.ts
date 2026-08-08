import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetLoaderService {

  preloadImages(urls: string[]): Promise<void> {

    return Promise.all(
      urls.map(url => this.preloadImage(url))
    ).then(() => {});
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
