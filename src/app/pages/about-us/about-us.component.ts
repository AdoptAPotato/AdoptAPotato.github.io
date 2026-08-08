import { Component, ElementRef, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CommonModule, } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Character } from '../../models/character';
import { LoadingComponent } from '../../components/loading/loading.component';
import { AssetLoaderService } from '../../services/asset-loader.service';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-about-us',
  imports: [CommonModule, LoadingComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements AfterViewInit {

  @ViewChild('title') title!: ElementRef<HTMLSpanElement>;
  @ViewChild('cursor') cursor!: ElementRef<HTMLSpanElement>;
  @ViewChildren('personCard') cards!: QueryList<ElementRef>;

  people: Character[] = [];

  imagesLoaded = false;

  constructor(private http: HttpClient, private assetLoader: AssetLoaderService) {}

  ngOnInit(): void {
    this.http.get<Character[]>('/data/us.json')
      .subscribe(async data => {

        this.people = data;

        const images = [
          ...this.people.flatMap(person => [
            person.img,
            person.bg_img
          ]),
          '/textures/hr.png'
        ];

        await this.assetLoader.preloadImages(images);

        this.imagesLoaded = true;
      });
  }

  ngAfterViewInit() {
    const tl = gsap.timeline();

    tl.to(this.title.nativeElement, {
      duration: 1,
      text: { value: 'درباره ما' },
      ease: 'none'
    }).to(this.cursor.nativeElement, {
      autoAlpha: 0
    });

    this.cards.changes.subscribe(() => this.animateCards());
  }

  private animateCards() {
    this.cards.forEach(card => {

    const img = card.nativeElement.querySelector('.char-img');

    gsap.to(img, {
      scale: 1.3,
      ease: "none",
      scrollTrigger: {
        trigger: card.nativeElement,
        start: "top 80%",
        end: "center 30%",
        scrub: true
      }
    });

    gsap.to(card.nativeElement.querySelector('.char-img'), {
      y: -6,
      duration: 2.7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random()
    });

    gsap.to(card.nativeElement.querySelector('.char-img'), {
      x: 4,
      duration: 4.1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random()
    });

    gsap.to(card.nativeElement.querySelector('.char-img'), {
      rotation: 1.5,
      duration: 3.3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random()
    });
  });
  }
}
