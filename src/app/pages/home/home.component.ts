import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TextPlugin } from 'gsap/TextPlugin';
import { gsap } from 'gsap';

gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements AfterViewInit {

  @ViewChild('title') title!: ElementRef<HTMLSpanElement>;
  @ViewChild('cursor') cursor!: ElementRef<HTMLSpanElement>;

  @ViewChildren('potato')
  potatoes!: QueryList<ElementRef<HTMLImageElement>>;
  @ViewChildren('sparkle')
  sparkles!: QueryList<ElementRef<HTMLImageElement>>;

  ngAfterViewInit() {
    const tl = gsap.timeline();

    tl.to(this.title.nativeElement, {
      duration: 2,
      text: { value: 'یه سیب‌زمینی به سرپرستی بگیر!' },
      ease: 'none'
    }).to(this.cursor.nativeElement, {
      autoAlpha: 0
    });


    this.potatoes.forEach((potato, i) => {
      gsap.to(potato.nativeElement, {
        y: -5 - Math.random() * 6,
        duration: 3.5 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random()
      });
    });

    this.sparkles.forEach((sparkle, i) => {
      gsap.to(sparkle.nativeElement, {
        y: -5 - Math.random() * 4,
        rotation: gsap.utils.random(-8, 8),
        scale: gsap.utils.random(0.95, 1.08),
        duration: 3 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random()
      });
    });
  }

}
