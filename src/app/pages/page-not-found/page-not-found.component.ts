import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-page-not-found',
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent implements AfterViewInit {

  @ViewChild('container')
  container!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    gsap.to(this.container.nativeElement, {
      y: -12,
      duration: 2.7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(this.container.nativeElement, {
      x: 5,
      duration: 4.1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(this.container.nativeElement, {
      rotation: 1.5,
      duration: 3.3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

}
